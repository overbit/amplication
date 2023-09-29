import { Program as TProgram } from "../api/program/Program";

export const PROGRAM_TITLE_FIELD = "id";

export const ProgramTitle = (record: TProgram): string => {
  return record.id?.toString() || String(record.id);
};
