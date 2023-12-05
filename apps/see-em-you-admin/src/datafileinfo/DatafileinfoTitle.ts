import { Datafileinfo as TDatafileinfo } from "../api/datafileinfo/Datafileinfo";

export const DATAFILEINFO_TITLE_FIELD = "extension";

export const DatafileinfoTitle = (record: TDatafileinfo): string => {
  return record.extension?.toString() || String(record.id);
};
