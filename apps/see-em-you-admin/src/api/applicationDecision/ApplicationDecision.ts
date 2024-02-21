export type ApplicationDecision = {
  applicationId: number;
  programId: number;
  periodId: number;
  admissionProgramId: number;
  admissionStatus: string | null;
  comments: string | null;
  attendOtherUniversity: number | null;
  otherChoiceLocation: string | null;
  visitCampus: number | null;
  visitHelpful: number | null;
  visitComments: number | null;
  id: string;
};
