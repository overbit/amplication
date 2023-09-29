import { MergeDatafile as TMergeDatafile } from "../api/mergeDatafile/MergeDatafile";

export const MERGEDATAFILE_TITLE_FIELD = "mergeFilename";

export const MergeDatafileTitle = (record: TMergeDatafile): string => {
  return record.mergeFilename?.toString() || String(record.id);
};
