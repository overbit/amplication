import { SlateOrg as TSlateOrg } from "../api/slateOrg/SlateOrg";

export const SLATEORG_TITLE_FIELD = "localName";

export const SlateOrgTitle = (record: TSlateOrg): string => {
  return record.localName?.toString() || String(record.id);
};
