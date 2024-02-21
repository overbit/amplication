import { ScsUser as TScsUser } from "../api/scsUser/ScsUser";

export const SCSUSER_TITLE_FIELD = "cmuGuid";

export const ScsUserTitle = (record: TScsUser): string => {
  return record.cmuGuid?.toString() || String(record.id);
};
