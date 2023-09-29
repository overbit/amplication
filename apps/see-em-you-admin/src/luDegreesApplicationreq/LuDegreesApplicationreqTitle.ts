import { LuDegreesApplicationreq as TLuDegreesApplicationreq } from "../api/luDegreesApplicationreq/LuDegreesApplicationreq";

export const LUDEGREESAPPLICATIONREQ_TITLE_FIELD = "id";

export const LuDegreesApplicationreqTitle = (
  record: TLuDegreesApplicationreq
): string => {
  return record.id?.toString() || String(record.id);
};
