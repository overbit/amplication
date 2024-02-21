import { Datafileinfo as TDatafileinfo } from "../api/datafileinfo/Datafileinfo";

export const DATAFILEINFO_TITLE_FIELD = "typeField";

export const DatafileinfoTitle = (record: TDatafileinfo): string => {
  return record.typeField?.toString() || String(record.id);
};
