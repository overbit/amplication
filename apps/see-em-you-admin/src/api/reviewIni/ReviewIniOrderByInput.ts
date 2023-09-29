import { SortOrder } from "../../util/SortOrder";

export type ReviewIniOrderByInput = {
  academicComments?: SortOrder;
  academicProgramComments?: SortOrder;
  academicRating?: SortOrder;
  additionalComments?: SortOrder;
  alternativeProgram?: SortOrder;
  applicationId?: SortOrder;
  departmentId?: SortOrder;
  id?: SortOrder;
  leadershipComments?: SortOrder;
  leadershipRating?: SortOrder;
  overallRating?: SortOrder;
  researchComments?: SortOrder;
  researchRating?: SortOrder;
  reviewerId?: SortOrder;
  round?: SortOrder;
  technicalComments?: SortOrder;
  technicalRating?: SortOrder;
  ugProgramComments?: SortOrder;
  workExperienceComments?: SortOrder;
  workExperienceRating?: SortOrder;
};
