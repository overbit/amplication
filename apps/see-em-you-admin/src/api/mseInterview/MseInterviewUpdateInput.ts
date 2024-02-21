export type MseInterviewUpdateInput = {
  applicationId?: number;
  reviewerId?: number;
  interviewDate?: Date;
  interviewType?: string;
  interviewTypeOther?: string | null;
  interviewComments?: string;
};
