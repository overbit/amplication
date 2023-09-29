import { Merge as TMerge } from "../api/merge/Merge";

export const MERGE_TITLE_FIELD = "message";

export const MergeTitle = (record: TMerge): string => {
  return record.message?.toString() || String(record.id);
};
