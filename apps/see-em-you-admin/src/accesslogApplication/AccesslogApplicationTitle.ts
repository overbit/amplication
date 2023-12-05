import { AccesslogApplication as TAccesslogApplication } from "../api/accesslogApplication/AccesslogApplication";

export const ACCESSLOGAPPLICATION_TITLE_FIELD = "id";

export const AccesslogApplicationTitle = (
  record: TAccesslogApplication
): string => {
  return record.id?.toString() || String(record.id);
};
