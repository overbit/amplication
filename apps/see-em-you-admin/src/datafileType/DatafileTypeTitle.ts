import { DatafileType as TDatafileType } from "../api/datafileType/DatafileType";

export const DATAFILETYPE_TITLE_FIELD = "datafileType";

export const DatafileTypeTitle = (record: TDatafileType): string => {
  return record.datafileType?.toString() || String(record.id);
};
