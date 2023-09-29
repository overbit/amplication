import { LuApplicationAppreq as TLuApplicationAppreq } from "../api/luApplicationAppreq/LuApplicationAppreq";

export const LUAPPLICATIONAPPREQ_TITLE_FIELD = "id";

export const LuApplicationAppreqTitle = (
  record: TLuApplicationAppreq
): string => {
  return record.id?.toString() || String(record.id);
};
