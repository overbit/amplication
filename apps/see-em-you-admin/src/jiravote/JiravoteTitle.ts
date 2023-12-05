import { Jiravote as TJiravote } from "../api/jiravote/Jiravote";

export const JIRAVOTE_TITLE_FIELD = "jiraName";

export const JiravoteTitle = (record: TJiravote): string => {
  return record.jiraName?.toString() || String(record.id);
};
