import { FailedMerge as TFailedMerge } from "../api/failedMerge/FailedMerge";

export const FAILEDMERGE_TITLE_FIELD = "guid";

export const FailedMergeTitle = (record: TFailedMerge): string => {
  return record.guid?.toString() || String(record.id);
};
