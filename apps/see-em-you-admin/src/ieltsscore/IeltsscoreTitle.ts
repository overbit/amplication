import { Ieltsscore as TIeltsscore } from "../api/ieltsscore/Ieltsscore";

export const IELTSSCORE_TITLE_FIELD = "testEmail";

export const IeltsscoreTitle = (record: TIeltsscore): string => {
  return record.testEmail?.toString() || String(record.id);
};
