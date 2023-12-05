export type ApplicationDecisionCreateInput = {
  admissionProgramId: number;
  admissionStatus?: string | null;
  applicationId: number;
  attendOtherUniversity?: number | null;
  comments?: string | null;
  otherChoiceLocation?: string | null;
  periodId: number;
  programId: number;
  visitCampus?: number | null;
  visitComments?: number | null;
  visitHelpful?: number | null;
};
