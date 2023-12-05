import { LuApplicationEtsgre as TLuApplicationEtsgre } from "../api/luApplicationEtsgre/LuApplicationEtsgre";

export const LUAPPLICATIONETSGRE_TITLE_FIELD = "id";

export const LuApplicationEtsgreTitle = (
  record: TLuApplicationEtsgre
): string => {
  return record.id?.toString() || String(record.id);
};
