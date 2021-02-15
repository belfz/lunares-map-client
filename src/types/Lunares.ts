export type LunarAreaId = "A1" | "A2" | "A3" | "A4" | "B1" | "B2" | "B3" | "B4";

export const AllLunarAreaIds: LunarAreaId[] = [
  "A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4"
];

export type MapEvents = {
  [key in LunarAreaId]?: {
    objectives?: string[];
    warnings?: string[];
  }
}
