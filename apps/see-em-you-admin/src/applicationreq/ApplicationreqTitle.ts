import { Applicationreq as TApplicationreq } from "../api/applicationreq/Applicationreq";

export const APPLICATIONREQ_TITLE_FIELD = "linkname";

export const ApplicationreqTitle = (record: TApplicationreq): string => {
  return record.linkname?.toString() || String(record.id);
};
