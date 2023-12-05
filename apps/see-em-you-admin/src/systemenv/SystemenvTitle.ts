import { Systemenv as TSystemenv } from "../api/systemenv/Systemenv";

export const SYSTEMENV_TITLE_FIELD = "sysemail";

export const SystemenvTitle = (record: TSystemenv): string => {
  return record.sysemail?.toString() || String(record.id);
};
