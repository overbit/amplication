import { Applicationreq as TApplicationreq } from "../api/applicationreq/Applicationreq";

export const APPLICATIONREQ_TITLE_FIELD = "name";

export const ApplicationreqTitle = (record: TApplicationreq): string => {
  return record.name?.toString() || String(record.id);
};
