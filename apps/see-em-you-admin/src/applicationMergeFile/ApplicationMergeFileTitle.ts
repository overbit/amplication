import { ApplicationMergeFile as TApplicationMergeFile } from "../api/applicationMergeFile/ApplicationMergeFile";

export const APPLICATIONMERGEFILE_TITLE_FIELD = "guid";

export const ApplicationMergeFileTitle = (
  record: TApplicationMergeFile
): string => {
  return record.guid?.toString() || String(record.id);
};
