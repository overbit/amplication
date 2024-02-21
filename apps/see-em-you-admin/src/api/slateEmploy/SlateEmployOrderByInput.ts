import { SortOrder } from "../../util/SortOrder";

export type SlateEmployOrderByInput = {
  prefix?: SortOrder;
  first?: SortOrder;
  middle?: SortOrder;
  last?: SortOrder;
  job1Organization?: SortOrder;
  jobNum1YearsOfExperience?: SortOrder;
  job1From?: SortOrder;
  job1To?: SortOrder;
  job2From?: SortOrder;
  job2To?: SortOrder;
  job2Organization?: SortOrder;
  jobNum2YearsOfExperience?: SortOrder;
  job3Organization?: SortOrder;
  job3From?: SortOrder;
  job3To?: SortOrder;
  jobNum3YearsOfExperience?: SortOrder;
  id?: SortOrder;
};
