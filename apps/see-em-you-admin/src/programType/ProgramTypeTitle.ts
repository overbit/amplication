import { ProgramType as TProgramType } from "../api/programType/ProgramType";

export const PROGRAMTYPE_TITLE_FIELD = "programType";

export const ProgramTypeTitle = (record: TProgramType): string => {
  return record.programType?.toString() || String(record.id);
};
