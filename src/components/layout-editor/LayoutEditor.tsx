import React, { useMemo, useRef, useState, useEffect, useCallback } from 'react';
import { seatingByType, type LayoutState, type FloorObjectKind, type FloorObject } from './types';
import { ROOM_POLY_SVG, SVG_UNITS_HEIGHT, SVG_UNITS_WIDTH, computeRectChairCentersSvg, computeRoundChairCentersSvg, ftToSvgX, ftToSvgY, getObjectDimensionsFt, svgToFtX, svgToFtY } from './geometry';

const DEFAULT_STATE: LayoutState = {
  tables: [],
  chairDiameterFt: 1.5, // 18 in
  chairOffsetFt: 0.5, // 6 inches from table edge to chair back
};

function newId(): string {
  return Math.random().toString(36).slice(2, 10);
}

// Draggable floor object component for the menu
function DraggableFloorObject({ kind, onDragStart }: { kind: FloorObjectKind; onDragStart: (kind: FloorObjectKind) => void }) {
  const dims = getObjectDimensionsFt(kind);
  const seats = kind in seatingByType ? seatingByType[kind as keyof typeof seatingByType] : 0;
  const name = kind === 'round_4ft' ? '4 ft Round' : 
               kind === 'rect_6ft' ? '6 ft Rectangle' : 
               kind === 'rect_8ft' ? '8 ft Rectangle' :
               '12×12 ft Dance Floor';
  
  return (
    <div 
      className="bg-white border-2 border-gray-200 rounded-lg p-4 cursor-grab active:cursor-grabbing hover:border-primary hover:shadow-md transition-all"
      draggable
      onDragStart={() => onDragStart(kind)}
    >
      <div className="flex flex-col items-center gap-2">
        <svg width="60" height="40" viewBox="0 0 60 40" className="border rounded">
          {kind === 'round_4ft' ? (
            <>
              <ellipse cx="30" cy="20" rx="12" ry="12" fill="#f4f1ed" stroke="#2a4035" strokeWidth="1" />
              {/* Sample chairs around table - positioned closer to fit in viewBox */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x = 30 + 17 * Math.cos(rad);
                const y = 20 + 17 * Math.sin(rad);
                return <circle key={i} cx={x} cy={y} r="2.5" fill="#2a4035" opacity="0.7" />;
              })}
            </>
          ) : kind === 'dance_floor' ? (
            <>
              <rect x="10" y="10" width="40" height="20" fill="#d6b67e" stroke="#2a4035" strokeWidth="1" rx="2" />
              {/* Dance floor pattern */}
              <g stroke="#2a4035" strokeWidth="0.5" opacity="0.3">
                <line x1="20" y1="10" x2="20" y2="30" />
                <line x1="30" y1="10" x2="30" y2="30" />
                <line x1="40" y1="10" x2="40" y2="30" />
                <line x1="10" y1="15" x2="50" y2="15" />
                <line x1="10" y1="20" x2="50" y2="20" />
                <line x1="10" y1="25" x2="50" y2="25" />
              </g>
              <text x="30" y="22" textAnchor="middle" fontSize="6" fill="#2a4035" opacity="0.7">DANCE</text>
            </>
          ) : (
            <>
              <rect x="10" y="15" width={kind === 'rect_6ft' ? "40" : "50"} height="10" fill="#f4f1ed" stroke="#2a4035" strokeWidth="1" />
              {/* Sample chairs along sides */}
              {Array.from({ length: kind === 'rect_6ft' ? 6 : 8 }, (_, i) => {
                const isTop = i < (kind === 'rect_6ft' ? 3 : 4);
                const idx = isTop ? i : i - (kind === 'rect_6ft' ? 3 : 4);
                const total = kind === 'rect_6ft' ? 3 : 4;
                const x = 10 + (kind === 'rect_6ft' ? 40 : 50) * (idx + 1) / (total + 1);
                const y = isTop ? 10 : 30;
                return <circle key={i} cx={x} cy={y} r="3" fill="#2a4035" opacity="0.7" />;
              })}
            </>
          )}
        </svg>
        <div className="text-center">
          <div className="font-semibold text-sm">{name}</div>
          <div className="text-xs text-gray-600">{seats > 0 ? `${seats} seats` : 'Dance area'}</div>
        </div>
      </div>
    </div>
  );
}

export function LayoutEditor() {
  const [state, setState] = useState<LayoutState>(() => {
    try {
      const saved = localStorage.getItem('pv-layout');
      if (saved) return JSON.parse(saved);
    } catch {}
    return DEFAULT_STATE;
  });
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [draggedObjectKind, setDraggedObjectKind] = useState<FloorObjectKind | null>(null);

  const svgRef = useRef<SVGSVGElement | null>(null);

  const totalSeats = useMemo(() => state.tables.reduce((sum, t) => {
    return sum + (t.kind in seatingByType ? seatingByType[t.kind as keyof typeof seatingByType] : 0);
  }, 0), [state.tables]);

  const deleteSelected = useCallback(() => {
    if (!selectedId) return;
    setState((s) => ({ ...s, tables: s.tables.filter((t) => t.id !== selectedId) }));
    setSelectedId(null);
  }, [selectedId]);

  // Keyboard event handler for delete key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (selectedId) {
          deleteSelected();
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId, deleteSelected]);

  function handleDrop(e: React.DragEvent<SVGSVGElement>) {
    e.preventDefault();
    if (!draggedObjectKind) return;
    
    const svg = svgRef.current;
    if (!svg) return;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const cursor = pt.matrixTransform(svg.getScreenCTM()?.inverse());
    const xFt = svgToFtX(cursor.x);
    const yFt = svgToFtY(cursor.y);

    const obj: FloorObject = {
      id: newId(),
      kind: draggedObjectKind,
      xFt,
      yFt,
      rotationDeg: 0,
    };
    setState((s) => ({ ...s, tables: [...s.tables, obj] }));
    setSelectedId(obj.id);
    setDraggedObjectKind(null);
  }
  
  function handleDragOver(e: React.DragEvent<SVGSVGElement>) {
    e.preventDefault();
  }

  // Auto-save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('pv-layout', JSON.stringify(state));
  }, [state]);

  function exportAsPNG() {
    const svg = svgRef.current;
    if (!svg) return;

    // Get the SVG's actual dimensions from viewBox
    const viewBox = svg.viewBox.baseVal;
    const svgWidth = viewBox.width;
    const svgHeight = viewBox.height;
    
    // Calculate proper aspect ratio
    const aspectRatio = svgWidth / svgHeight;
    
    // Set export dimensions maintaining aspect ratio
    const scale = 3; // Higher scale for better quality
    const exportHeight = 600;
    const exportWidth = exportHeight * aspectRatio;
    
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with proper aspect ratio
    canvas.width = exportWidth * scale;
    canvas.height = exportHeight * scale;
    ctx.scale(scale, scale);

    // Clone the SVG and set explicit dimensions
    const svgClone = svg.cloneNode(true) as SVGSVGElement;
    svgClone.setAttribute('width', exportWidth.toString());
    svgClone.setAttribute('height', exportHeight.toString());

    // Get SVG data
    const svgData = new XMLSerializer().serializeToString(svgClone);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    // Create image and draw to canvas
    const img = new Image();
    img.onload = () => {
      // Fill white background
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, exportWidth, exportHeight);
      
      // Draw SVG at correct size
      ctx.drawImage(img, 0, 0, exportWidth, exportHeight);
      
      // Convert to PNG and download
      canvas.toBlob((blob) => {
        if (blob) {
          const link = document.createElement('a');
          link.download = `venue-layout-${new Date().toISOString().split('T')[0]}.png`;
          link.href = URL.createObjectURL(blob);
          link.click();
          URL.revokeObjectURL(link.href);
        }
      }, 'image/png');
      
      URL.revokeObjectURL(url);
    };
    
    img.onerror = () => {
      console.error('Failed to load SVG for PNG export');
      URL.revokeObjectURL(url);
    };
    
    img.src = url;
  }

  // Minimal drag handling for selected table
  function onDrag(e: React.MouseEvent, id: string) {
    e.preventDefault();
    e.stopPropagation();
    const svg = svgRef.current;
    if (!svg) return;
    const move = (ev: MouseEvent) => {
      const pt = svg.createSVGPoint();
      pt.x = ev.clientX;
      pt.y = ev.clientY;
      const c = pt.matrixTransform(svg.getScreenCTM()?.inverse());
      const xFt = svgToFtX(c.x);
      const yFt = svgToFtY(c.y);
      setState((s) => ({
        ...s,
        tables: s.tables.map((t) => (t.id === id ? { ...t, xFt, yFt } : t)),
      }));
    };
      const up = () => {
        window.removeEventListener('mousemove', move);
        window.removeEventListener('mouseup', up);
      };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  }

  function rotateSelected(deltaDeg: number) {
    if (!selectedId) return;
    setState((s) => ({
      ...s,
      tables: s.tables.map((t) => (t.id === selectedId ? { ...t, rotationDeg: t.rotationDeg + deltaDeg } : t)),
    }));
  }

  return (
    <div className="space-y-4">
      {/* Table Menu */}
      <div className="mb-4">
        <h4 className="font-semibold mb-3">Drag Items to Floor Plan</h4>
        <div className="grid grid-cols-4 gap-3">
          <DraggableFloorObject kind="round_4ft" onDragStart={setDraggedObjectKind} />
          <DraggableFloorObject kind="rect_6ft" onDragStart={setDraggedObjectKind} />
          <DraggableFloorObject kind="rect_8ft" onDragStart={setDraggedObjectKind} />
          <DraggableFloorObject kind="dance_floor" onDragStart={setDraggedObjectKind} />
        </div>
      </div>
      
      {/* Stats */}
      <div className="flex justify-between items-center text-sm mb-4">
        <div className="flex gap-4">
          <span>Items: <strong>{state.tables.length}</strong></span>
          <span>Total Seats: <strong>{totalSeats}</strong></span>
          {state.tables.some(t => t.kind === 'dance_floor') && <span className="text-primary">✨ Dance Floor Added</span>}
        </div>
        {selectedId && (
          <div className="text-blue-600">
            <strong>Selected:</strong> {state.tables.find(t => t.id === selectedId)?.kind.replace('_', ' ').replace('ft', ' ft') || 'None'}
          </div>
        )}
      </div>

      <div className="border rounded overflow-hidden">
        <svg
          ref={svgRef}
          viewBox={`-4 -4 ${SVG_UNITS_WIDTH + 8} ${SVG_UNITS_HEIGHT + 8}`}
          className={`w-full h-[480px] bg-white ${draggedObjectKind ? 'cursor-copy' : 'cursor-default'}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={(e) => {
            // Deselect if clicking on empty space
            if (e.target === e.currentTarget) setSelectedId(null);
          }}
        >
          {/* Grid lines for reference (1 ft spacing) */}
          <g stroke="#e0e0e0" strokeWidth="0.05">
            {/* Vertical grid lines every 5 ft */}
            {[5, 10, 15, 20, 25].map(x => (
              <line key={`v${x}`} x1={x} y1={0} x2={x} y2={47} />
            ))}
            {/* Horizontal grid lines every 5 ft (scaled) */}
            {[5, 10, 15, 20, 25, 30, 35, 40].map(y => (
              <line key={`h${y}`} x1={0} y1={y * (47/43)} x2={42} y2={y * (47/43)} />
            ))}
          </g>
          
          {/* Floor plan outline */}
          <path d="M0 0 H30 V35 H36 L42 42 V47 H0 Z" fill="none" stroke="#000" strokeWidth={0.3} />
          
          {/* Lobby label */}
          <g fontSize="1.2" fill="#666" textAnchor="middle">
            <text x="38" y="44" fontWeight="bold">LOBBY</text>
            <text x="38" y="45.5" fontSize="0.8" opacity="0.7">entrance</text>
          </g>
          
          {/* Dimension labels and grid markers */}
          <g fontSize="0.8" fill="#999" textAnchor="middle">
            {/* Top ruler */}
            {[0, 5, 10, 15, 20, 25, 30].map(x => (
              <text key={`tx${x}`} x={x} y="-0.5">{x}'</text>
            ))}
            {/* Left ruler */}
            {[0, 10, 20, 30, 40].map(y => (
              <text key={`ty${y}`} x="-1.5" y={y * (47/43) + 0.3}>{y}'</text>
            ))}
          </g>

          {/* Tables, dance floors, and chairs */}
          {state.tables.map((t) => {
            const dims = getObjectDimensionsFt(t.kind);
            const cx = ftToSvgX(t.xFt);
            const cy = ftToSvgY(t.yFt);
            const selected = selectedId === t.id;
            const chairOffset = t.chairOffsetFt ?? state.chairOffsetFt;

            let chairCenters: Array<{ x: number; y: number }> = [];
            if (t.kind === 'round_4ft' && dims.radiusFt) {
              chairCenters = computeRoundChairCentersSvg(t.xFt, t.yFt, dims.radiusFt, chairOffset, 6, t.rotationDeg);
            } else if (t.kind === 'rect_6ft') {
              chairCenters = computeRectChairCentersSvg(t.xFt, t.yFt, dims.widthFt, dims.heightFt, chairOffset, 3, t.rotationDeg);
            } else if (t.kind === 'rect_8ft') {
              chairCenters = computeRectChairCentersSvg(t.xFt, t.yFt, dims.widthFt, dims.heightFt, chairOffset, 4, t.rotationDeg);
            }
            // Dance floor has no chairs

            return (
              <g 
                key={t.id} 
                className="cursor-move hover:opacity-80"
                onMouseDown={(e) => { setSelectedId(t.id); onDrag(e, t.id); }}
                onClick={(e) => { e.stopPropagation(); setSelectedId(t.id); }}
              >
                {t.kind === 'round_4ft' && (
                  <ellipse cx={cx} cy={cy} rx={ftToSvgX(dims.radiusFt!)} ry={ftToSvgY(dims.radiusFt!)} fill={selected ? '#d6b67e' : '#f4f1ed'} stroke="#2a4035" strokeWidth={0.2} />
                )}
                {(t.kind === 'rect_6ft' || t.kind === 'rect_8ft') && (
                  <g transform={`translate(${cx} ${cy}) rotate(${t.rotationDeg})`}>
                    <rect x={-ftToSvgX(dims.widthFt) / 2} y={-ftToSvgY(dims.heightFt) / 2} width={ftToSvgX(dims.widthFt)} height={ftToSvgY(dims.heightFt)} fill={selected ? '#d6b67e' : '#f4f1ed'} stroke="#2a4035" strokeWidth={0.2} />
                  </g>
                )}
                {t.kind === 'dance_floor' && (
                  <g transform={`translate(${cx} ${cy}) rotate(${t.rotationDeg})`}>
                    <rect 
                      x={-ftToSvgX(dims.widthFt) / 2} 
                      y={-ftToSvgY(dims.heightFt) / 2} 
                      width={ftToSvgX(dims.widthFt)} 
                      height={ftToSvgY(dims.heightFt)} 
                      fill={selected ? '#d6b67e' : '#e6c968'} 
                      stroke="#2a4035" 
                      strokeWidth={0.3}
                      rx={ftToSvgX(0.5)}
                    />
                    {/* Dance floor pattern */}
                    <g stroke="#2a4035" strokeWidth={0.1} opacity={0.4}>
                      {/* Grid pattern */}
                      {Array.from({ length: 4 }, (_, i) => {
                        const x = -ftToSvgX(dims.widthFt) / 2 + (i + 1) * ftToSvgX(dims.widthFt) / 5;
                        return <line key={`v${i}`} x1={x} y1={-ftToSvgY(dims.heightFt) / 2} x2={x} y2={ftToSvgY(dims.heightFt) / 2} />;
                      })}
                      {Array.from({ length: 4 }, (_, i) => {
                        const y = -ftToSvgY(dims.heightFt) / 2 + (i + 1) * ftToSvgY(dims.heightFt) / 5;
                        return <line key={`h${i}`} x1={-ftToSvgX(dims.widthFt) / 2} y1={y} x2={ftToSvgX(dims.widthFt) / 2} y2={y} />;
                      })}
                    </g>
                    <text 
                      x={0} 
                      y={0} 
                      textAnchor="middle" 
                      dominantBaseline="central" 
                      fontSize={ftToSvgX(1.2)} 
                      fill="#2a4035" 
                      opacity={0.6}
                      fontWeight="bold"
                    >
                      DANCE FLOOR
                    </text>
                  </g>
                )}

                {/* Chairs */}
                {chairCenters.map((c, idx) => (
                  <ellipse key={idx} cx={c.x} cy={c.y} rx={ftToSvgX(state.chairDiameterFt / 2)} ry={ftToSvgY(state.chairDiameterFt / 2)} fill="#2a4035" opacity={0.8} />
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm">
          <button 
            className="px-3 py-2 border rounded hover:bg-gray-50 disabled:opacity-50" 
            type="button" 
            onClick={() => rotateSelected(-15)}
            disabled={!selectedId}
          >
            ↺ Rotate -15°
          </button>
          <button 
            className="px-3 py-2 border rounded hover:bg-gray-50 disabled:opacity-50" 
            type="button" 
            onClick={() => rotateSelected(15)}
            disabled={!selectedId}
          >
            ↻ Rotate +15°
          </button>
          <button 
            className="px-3 py-2 border border-red-300 text-red-600 rounded hover:bg-red-50 disabled:opacity-50" 
            type="button" 
            onClick={deleteSelected}
            disabled={!selectedId}
          >
            🗑 Delete
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <button 
            className="px-3 py-2 border rounded hover:bg-gray-50" 
            type="button" 
            onClick={() => {
              setState(DEFAULT_STATE);
              setSelectedId(null);
            }}
          >
            Clear All
          </button>
          <button 
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors" 
            type="button" 
            onClick={exportAsPNG}
            title="Download as PNG"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LayoutEditor;


