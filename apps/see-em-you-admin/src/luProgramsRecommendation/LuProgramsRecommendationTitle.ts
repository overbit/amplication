import { LuProgramsRecommendation as TLuProgramsRecommendation } from "../api/luProgramsRecommendation/LuProgramsRecommendation";

export const LUPROGRAMSRECOMMENDATION_TITLE_FIELD = "id";

export const LuProgramsRecommendationTitle = (
  record: TLuProgramsRecommendation
): string => {
  return record.id?.toString() || String(record.id);
};
