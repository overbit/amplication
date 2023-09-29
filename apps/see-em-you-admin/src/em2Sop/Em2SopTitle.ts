import { Em2Sop as TEm2Sop } from "../api/em2Sop/Em2Sop";

export const EM2SOP_TITLE_FIELD = "additionalInfo";

export const Em2SopTitle = (record: TEm2Sop): string => {
  return record.additionalInfo?.toString() || String(record.id);
};
