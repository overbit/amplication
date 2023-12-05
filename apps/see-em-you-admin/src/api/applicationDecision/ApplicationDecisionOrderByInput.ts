import { SortOrder } from "../../util/SortOrder";

export type ApplicationDecisionOrderByInput = {
  admissionProgramId?: SortOrder;
  admissionStatus?: SortOrder;
  applicationId?: SortOrder;
  attendOtherUniversity?: SortOrder;
  comments?: SortOrder;
  id?: SortOrder;
  otherChoiceLocation?: SortOrder;
  periodId?: SortOrder;
  programId?: SortOrder;
  visitCampus?: SortOrder;
  visitComments?: SortOrder;
  visitHelpful?: SortOrder;
};
