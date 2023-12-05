import { MseInterview as TMseInterview } from "../api/mseInterview/MseInterview";

export const MSEINTERVIEW_TITLE_FIELD = "interviewComments";

export const MseInterviewTitle = (record: TMseInterview): string => {
  return record.interviewComments?.toString() || String(record.id);
};
