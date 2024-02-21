import { SortOrder } from "../../util/SortOrder";

export type ReviewIniOrderByInput = {
  applicationId?: SortOrder;
  reviewerId?: SortOrder;
  departmentId?: SortOrder;
  round?: SortOrder;
  technicalComments?: SortOrder;
  academicComments?: SortOrder;
  academicProgramComments?: SortOrder;
  researchComments?: SortOrder;
  workExperienceComments?: SortOrder;
  leadershipComments?: SortOrder;
  additionalComments?: SortOrder;
  ugProgramComments?: SortOrder;
  technicalRating?: SortOrder;
  academicRating?: SortOrder;
  researchRating?: SortOrder;
  workExperienceRating?: SortOrder;
  leadershipRating?: SortOrder;
  overallRating?: SortOrder;
  alternativeProgram?: SortOrder;
  id?: SortOrder;
};
