import { EtsToeflScore as TEtsToeflScore } from "../api/etsToeflScore/EtsToeflScore";

export const ETSTOEFLSCORE_TITLE_FIELD = "lName";

export const EtsToeflScoreTitle = (record: TEtsToeflScore): string => {
  return record.lName?.toString() || String(record.id);
};
