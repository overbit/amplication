import { ScsUser as TScsUser } from "../api/scsUser/ScsUser";

export const SCSUSER_TITLE_FIELD = "andrewId";

export const ScsUserTitle = (record: TScsUser): string => {
  return record.andrewId?.toString() || String(record.id);
};
