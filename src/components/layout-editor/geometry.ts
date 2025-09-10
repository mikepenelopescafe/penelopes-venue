import type { PointFt, TableKind, FloorObjectKind } from './types';

// SVG plan metrics derived from provided drawing
// Horizontal: 30 svg units = 30 ft
// Vertical: 47 svg units = 43 ft
export const SVG_UNITS_WIDTH = 30; // svg units
export const REAL_WIDTH_FT = 30; // ft
export const SVG_UNITS_HEIGHT = 47; // svg units
export const REAL_HEIGHT_FT = 43; // ft

export const FT_PER_SVG_X = REAL_WIDTH_FT / SVG_UNITS_WIDTH; // 1 ft per x unit
export const FT_PER_SVG_Y = REAL_HEIGHT_FT / SVG_UNITS_HEIGHT; // ~0.9149 ft per y unit
export const SVG_X_PER_FT = 1 / FT_PER_SVG_X; // 1 svg x unit per ft
export const SVG_Y_PER_FT = 1 / FT_PER_SVG_Y; // ~1.0698 svg y units per ft

export function ftToSvgX(xFt: number): number {
  return xFt * SVG_X_PER_FT;
}

export function ftToSvgY(yFt: number): number {
  return yFt * SVG_Y_PER_FT;
}

export function svgToFtX(xSvg: number): number {
  return xSvg * FT_PER_SVG_X;
}

export function svgToFtY(ySvg: number): number {
  return ySvg * FT_PER_SVG_Y;
}

// Room polygon in SVG coordinate space (from path M0 0 H30 V35 H36 L42 42 V47 H0 Z)
export const ROOM_POLY_SVG: Array<[number, number]> = [
  [0, 0],
  [30, 0],
  [30, 35],
  [36, 35],
  [42, 42],
  [42, 47],
  [0, 47],
];

export function pointInPolygonSvg(x: number, y: number, polygon: Array<[number, number]> = ROOM_POLY_SVG): boolean {
  // Ray casting algorithm
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0], yi = polygon[i][1];
    const xj = polygon[j][0], yj = polygon[j][1];
    const intersect = ((yi > y) !== (yj > y)) && (x < ((xj - xi) * (y - yi)) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

export function rotatePoint(cx: number, cy: number, x: number, y: number, angleDeg: number): { x: number; y: number } {
  const rad = (angleDeg * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const dx = x - cx;
  const dy = y - cy;
  return { x: cx + dx * cos - dy * sin, y: cy + dx * sin + dy * cos };
}

export function getObjectDimensionsFt(kind: FloorObjectKind): { widthFt: number; heightFt: number; radiusFt?: number } {
  if (kind === 'round_4ft') return { widthFt: 4, heightFt: 4, radiusFt: 2 };
  if (kind === 'rect_6ft') return { widthFt: 6, heightFt: 2.5 };
  if (kind === 'rect_8ft') return { widthFt: 8, heightFt: 2.5 };
  if (kind === 'dance_floor') return { widthFt: 12, heightFt: 12 };
  return { widthFt: 4, heightFt: 4 }; // fallback
}

// Legacy function for backward compatibility
export function getTableDimensionsFt(kind: TableKind): { widthFt: number; heightFt: number; radiusFt?: number } {
  return getObjectDimensionsFt(kind);
}

export function computeRoundChairCentersSvg(
  cxFt: number,
  cyFt: number,
  tableRadiusFt: number,
  chairOffsetFt: number,
  chairCount: number,
  rotationDeg: number
): Array<{ x: number; y: number }> {
  const centers: Array<{ x: number; y: number }> = [];
  const rFt = tableRadiusFt + chairOffsetFt;
  const cxSvg = ftToSvgX(cxFt);
  const cySvg = ftToSvgY(cyFt);
  const rSvgX = ftToSvgX(rFt);
  const rSvgY = ftToSvgY(rFt);
  for (let i = 0; i < chairCount; i++) {
    const baseAngle = (360 / chairCount) * i + rotationDeg;
    const rad = (baseAngle * Math.PI) / 180;
    // Because x and y scales differ, approximate ellipse by scaling each axis
    const x = cxSvg + rSvgX * Math.cos(rad);
    const y = cySvg + rSvgY * Math.sin(rad);
    centers.push({ x, y });
  }
  return centers;
}

export function computeRectChairCentersSvg(
  cxFt: number,
  cyFt: number,
  widthFt: number,
  heightFt: number,
  chairOffsetFt: number,
  chairsPerLongSide: number,
  rotationDeg: number
): Array<{ x: number; y: number }> {
  // Place chairs along the long sides only, evenly spaced, offset outward by chairOffset
  const longIsX = widthFt >= heightFt;
  const longLenFt = longIsX ? widthFt : heightFt;
  const shortLenFt = longIsX ? heightFt : widthFt;
  const halfLong = longLenFt / 2;
  const halfShort = shortLenFt / 2;

  const centersFt: Array<{ x: number; y: number }> = [];
  for (let side = -1; side <= 1; side += 2) {
    // side = -1 (one long edge), +1 (opposite long edge)
    for (let i = 1; i <= chairsPerLongSide; i++) {
      const t = (i / (chairsPerLongSide + 1)) * 2 - 1; // from -1 to 1
      const along = t * halfLong;
      const outward = side * (halfShort + chairOffsetFt);
      const localX = longIsX ? along : outward;
      const localY = longIsX ? outward : along;
      centersFt.push({ x: localX, y: localY });
    }
  }

  // Rotate + translate to world feet, then map to SVG coordinates
  const resultSvg: Array<{ x: number; y: number }> = [];
  for (const p of centersFt) {
    const rotated = rotatePoint(0, 0, p.x, p.y, rotationDeg);
    const worldXFt = cxFt + rotated.x;
    const worldYFt = cyFt + rotated.y;
    resultSvg.push({ x: ftToSvgX(worldXFt), y: ftToSvgY(worldYFt) });
  }
  return resultSvg;
}


