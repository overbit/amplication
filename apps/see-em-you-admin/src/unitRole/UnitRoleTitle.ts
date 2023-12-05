import { UnitRole as TUnitRole } from "../api/unitRole/UnitRole";

export const UNITROLE_TITLE_FIELD = "id";

export const UnitRoleTitle = (record: TUnitRole): string => {
  return record.id?.toString() || String(record.id);
};
