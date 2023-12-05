import { ProgramGroupProgram as TProgramGroupProgram } from "../api/programGroupProgram/ProgramGroupProgram";

export const PROGRAMGROUPPROGRAM_TITLE_FIELD = "id";

export const ProgramGroupProgramTitle = (
  record: TProgramGroupProgram
): string => {
  return record.id?.toString() || String(record.id);
};
