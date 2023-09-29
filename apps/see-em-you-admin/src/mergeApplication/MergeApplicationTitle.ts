import { MergeApplication as TMergeApplication } from "../api/mergeApplication/MergeApplication";

export const MERGEAPPLICATION_TITLE_FIELD = "baseConvertMessage";

export const MergeApplicationTitle = (record: TMergeApplication): string => {
  return record.baseConvertMessage?.toString() || String(record.id);
};
