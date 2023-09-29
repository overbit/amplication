import { MitsSlateSuppinfo as TMitsSlateSuppinfo } from "../api/mitsSlateSuppinfo/MitsSlateSuppinfo";

export const MITSSLATESUPPINFO_TITLE_FIELD = "fellowship10Name";

export const MitsSlateSuppinfoTitle = (record: TMitsSlateSuppinfo): string => {
  return record.fellowship10Name?.toString() || String(record.id);
};
