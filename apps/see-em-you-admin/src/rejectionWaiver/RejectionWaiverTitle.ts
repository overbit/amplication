import { RejectionWaiver as TRejectionWaiver } from "../api/rejectionWaiver/RejectionWaiver";

export const REJECTIONWAIVER_TITLE_FIELD = "id";

export const RejectionWaiverTitle = (record: TRejectionWaiver): string => {
  return record.id?.toString() || String(record.id);
};
