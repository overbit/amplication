import { ProgramGroup as TProgramGroup } from "../api/programGroup/ProgramGroup";

export const PROGRAMGROUP_TITLE_FIELD = "programGroupName";

export const ProgramGroupTitle = (record: TProgramGroup): string => {
  return record.programGroupName?.toString() || String(record.id);
};
