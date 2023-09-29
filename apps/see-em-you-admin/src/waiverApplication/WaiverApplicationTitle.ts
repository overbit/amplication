import { WaiverApplication as TWaiverApplication } from "../api/waiverApplication/WaiverApplication";

export const WAIVERAPPLICATION_TITLE_FIELD = "id";

export const WaiverApplicationTitle = (record: TWaiverApplication): string => {
  return record.id?.toString() || String(record.id);
};
