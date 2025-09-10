export type TableKind = 'round_4ft' | 'rect_6ft' | 'rect_8ft';
export type FloorObjectKind = TableKind | 'dance_floor';

export const seatingByType: Record<TableKind, number> = {
  round_4ft: 6,
  rect_6ft: 6,
  rect_8ft: 8,
};

export interface FloorObject {
  id: string;
  kind: FloorObjectKind;
  xFt: number; // object center X in feet
  yFt: number; // object center Y in feet
  rotationDeg: number; // rotation around center in degrees
  chairOffsetFt?: number; // clearance from table edge to chair back (tables only)
}

// Legacy type alias for backward compatibility
export type TableObject = FloorObject;

export interface LayoutState {
  tables: FloorObject[]; // includes tables and dance floors
  chairDiameterFt: number; // default 1.67 ft (20 inches)
  chairOffsetFt: number; // default 1.5 ft
}

export interface PointFt {
  x: number;
  y: number;
}


