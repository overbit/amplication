import { WaiverOrg as TWaiverOrg } from "../api/waiverOrg/WaiverOrg";

export const WAIVERORG_TITLE_FIELD = "name";

export const WaiverOrgTitle = (record: TWaiverOrg): string => {
  return record.name?.toString() || String(record.id);
};
