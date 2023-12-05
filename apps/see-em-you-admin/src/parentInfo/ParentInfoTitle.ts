import { ParentInfo as TParentInfo } from "../api/parentInfo/ParentInfo";

export const PARENTINFO_TITLE_FIELD = "p1Profession";

export const ParentInfoTitle = (record: TParentInfo): string => {
  return record.p1Profession?.toString() || String(record.id);
};
