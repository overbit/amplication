import { GrescoreMscsWaiver as TGrescoreMscsWaiver } from "../api/grescoreMscsWaiver/GrescoreMscsWaiver";

export const GRESCOREMSCSWAIVER_TITLE_FIELD = "id";

export const GrescoreMscsWaiverTitle = (
  record: TGrescoreMscsWaiver
): string => {
  return record.id?.toString() || String(record.id);
};
