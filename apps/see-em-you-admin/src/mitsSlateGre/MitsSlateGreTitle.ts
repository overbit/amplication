import { MitsSlateGre as TMitsSlateGre } from "../api/mitsSlateGre/MitsSlateGre";

export const MITSSLATEGRE_TITLE_FIELD = "first";

export const MitsSlateGreTitle = (record: TMitsSlateGre): string => {
  return record.first?.toString() || String(record.id);
};
