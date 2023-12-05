import { CashnetDirect as TCashnetDirect } from "../api/cashnetDirect/CashnetDirect";

export const CASHNETDIRECT_TITLE_FIELD = "name";

export const CashnetDirectTitle = (record: TCashnetDirect): string => {
  return record.name?.toString() || String(record.id);
};
