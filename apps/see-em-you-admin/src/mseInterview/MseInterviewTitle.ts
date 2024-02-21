import { MseInterview as TMseInterview } from "../api/mseInterview/MseInterview";

export const MSEINTERVIEW_TITLE_FIELD = "interviewType";

export const MseInterviewTitle = (record: TMseInterview): string => {
  return record.interviewType?.toString() || String(record.id);
};
