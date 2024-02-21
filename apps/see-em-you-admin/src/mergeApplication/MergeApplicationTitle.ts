import { MergeApplication as TMergeApplication } from "../api/mergeApplication/MergeApplication";

export const MERGEAPPLICATION_TITLE_FIELD = "baseWriteMessage";

export const MergeApplicationTitle = (record: TMergeApplication): string => {
  return record.baseWriteMessage?.toString() || String(record.id);
};
