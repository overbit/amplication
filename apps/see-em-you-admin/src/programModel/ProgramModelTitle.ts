import { ProgramModel as TProgramModel } from "../api/programModel/ProgramModel";

export const PROGRAMMODEL_TITLE_FIELD = "description";

export const ProgramModelTitle = (record: TProgramModel): string => {
  return record.description?.toString() || String(record.id);
};
