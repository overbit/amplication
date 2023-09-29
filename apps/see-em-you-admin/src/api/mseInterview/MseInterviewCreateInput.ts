export type MseInterviewCreateInput = {
  applicationId: number;
  interviewComments: string;
  interviewDate: Date;
  interviewType: string;
  interviewTypeOther?: string | null;
  reviewerId: number;
};
