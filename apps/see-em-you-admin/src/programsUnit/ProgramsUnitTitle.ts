import { ProgramsUnit as TProgramsUnit } from "../api/programsUnit/ProgramsUnit";

export const PROGRAMSUNIT_TITLE_FIELD = "id";

export const ProgramsUnitTitle = (record: TProgramsUnit): string => {
  return record.id?.toString() || String(record.id);
};
