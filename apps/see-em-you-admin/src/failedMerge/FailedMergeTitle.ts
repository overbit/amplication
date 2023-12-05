import { FailedMerge as TFailedMerge } from "../api/failedMerge/FailedMerge";

export const FAILEDMERGE_TITLE_FIELD = "file";

export const FailedMergeTitle = (record: TFailedMerge): string => {
  return record.file?.toString() || String(record.id);
};
