import { LuDomainDepartment as TLuDomainDepartment } from "../api/luDomainDepartment/LuDomainDepartment";

export const LUDOMAINDEPARTMENT_TITLE_FIELD = "id";

export const LuDomainDepartmentTitle = (
  record: TLuDomainDepartment
): string => {
  return record.id?.toString() || String(record.id);
};
