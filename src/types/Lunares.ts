export type LunarAreaId = "A1" | "A2" | "A3" | "A4" | "B1" | "B2" | "B3" | "B4";

export const AllLunarAreaIds: LunarAreaId[] = [
  "A4", "A3", "A2", "A1", "B4", "B3", "B2", "B1"
];

export type MapEvents = {
  [key in LunarAreaId]?: {
    objectives?: string[];
    warnings?: string[];
  }
}
