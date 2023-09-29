import { SortOrder } from "../../util/SortOrder";

export type JiraIssueOrderByInput = {
  created?: SortOrder;
  id?: SortOrder;
  jiraId?: SortOrder;
  jiraIssueId?: SortOrder;
  jiraProject?: SortOrder;
  updatedAt?: SortOrder;
};
