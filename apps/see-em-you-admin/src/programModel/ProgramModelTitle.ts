import { ProgramModel as TProgramModel } from "../api/programModel/ProgramModel";

export const PROGRAMMODEL_TITLE_FIELD = "linkword";

export const ProgramModelTitle = (record: TProgramModel): string => {
  return record.linkword?.toString() || String(record.id);
};
