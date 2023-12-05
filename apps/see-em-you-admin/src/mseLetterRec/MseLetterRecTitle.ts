import { MseLetterRec as TMseLetterRec } from "../api/mseLetterRec/MseLetterRec";

export const MSELETTERREC_TITLE_FIELD = "id";

export const MseLetterRecTitle = (record: TMseLetterRec): string => {
  return record.id?.toString() || String(record.id);
};
