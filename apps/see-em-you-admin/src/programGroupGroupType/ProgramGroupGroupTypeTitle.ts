import { ProgramGroupGroupType as TProgramGroupGroupType } from "../api/programGroupGroupType/ProgramGroupGroupType";

export const PROGRAMGROUPGROUPTYPE_TITLE_FIELD = "id";

export const ProgramGroupGroupTypeTitle = (
  record: TProgramGroupGroupType
): string => {
  return record.id?.toString() || String(record.id);
};
