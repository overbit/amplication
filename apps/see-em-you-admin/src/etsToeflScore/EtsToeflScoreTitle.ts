import { EtsToeflScore as TEtsToeflScore } from "../api/etsToeflScore/EtsToeflScore";

export const ETSTOEFLSCORE_TITLE_FIELD = "countryName";

export const EtsToeflScoreTitle = (record: TEtsToeflScore): string => {
  return record.countryName?.toString() || String(record.id);
};
