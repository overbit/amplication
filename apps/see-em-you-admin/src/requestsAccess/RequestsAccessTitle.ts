import { RequestsAccess as TRequestsAccess } from "../api/requestsAccess/RequestsAccess";

export const REQUESTSACCESS_TITLE_FIELD = "user";

export const RequestsAccessTitle = (record: TRequestsAccess): string => {
  return record.user?.toString() || String(record.id);
};
