import { UsHsStatus as TUsHsStatus } from "../api/usHsStatus/UsHsStatus";

export const USHSSTATUS_TITLE_FIELD = "id";

export const UsHsStatusTitle = (record: TUsHsStatus): string => {
  return record.id?.toString() || String(record.id);
};
