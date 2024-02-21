import { MitsSlateGre as TMitsSlateGre } from "../api/mitsSlateGre/MitsSlateGre";

export const MITSSLATEGRE_TITLE_FIELD = "prefix";

export const MitsSlateGreTitle = (record: TMitsSlateGre): string => {
  return record.prefix?.toString() || String(record.id);
};
