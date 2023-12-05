import { LuReviewerGroup as TLuReviewerGroup } from "../api/luReviewerGroup/LuReviewerGroup";

export const LUREVIEWERGROUP_TITLE_FIELD = "id";

export const LuReviewerGroupTitle = (record: TLuReviewerGroup): string => {
  return record.id?.toString() || String(record.id);
};
