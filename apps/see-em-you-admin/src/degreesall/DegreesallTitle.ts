import { Degreesall as TDegreesall } from "../api/degreesall/Degreesall";

export const DEGREESALL_TITLE_FIELD = "name";

export const DegreesallTitle = (record: TDegreesall): string => {
  return record.name?.toString() || String(record.id);
};
