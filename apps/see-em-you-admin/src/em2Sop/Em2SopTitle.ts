import { Em2Sop as TEm2Sop } from "../api/em2Sop/Em2Sop";

export const EM2SOP_TITLE_FIELD = "objective";

export const Em2SopTitle = (record: TEm2Sop): string => {
  return record.objective?.toString() || String(record.id);
};
