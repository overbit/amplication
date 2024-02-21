import { MitsSlateSuppinfo as TMitsSlateSuppinfo } from "../api/mitsSlateSuppinfo/MitsSlateSuppinfo";

export const MITSSLATESUPPINFO_TITLE_FIELD = "fellowship1Name";

export const MitsSlateSuppinfoTitle = (record: TMitsSlateSuppinfo): string => {
  return record.fellowship1Name?.toString() || String(record.id);
};
