import { SortOrder } from "../../util/SortOrder";

export type ApplicationDecisionOrderByInput = {
  applicationId?: SortOrder;
  programId?: SortOrder;
  periodId?: SortOrder;
  admissionProgramId?: SortOrder;
  admissionStatus?: SortOrder;
  comments?: SortOrder;
  attendOtherUniversity?: SortOrder;
  otherChoiceLocation?: SortOrder;
  visitCampus?: SortOrder;
  visitHelpful?: SortOrder;
  visitComments?: SortOrder;
  id?: SortOrder;
};
