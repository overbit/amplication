export type MseInterviewCreateInput = {
  applicationId: number;
  reviewerId: number;
  interviewDate: Date;
  interviewType: string;
  interviewTypeOther?: string | null;
  interviewComments: string;
};
