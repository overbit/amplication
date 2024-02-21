import { SortOrder } from "../../util/SortOrder";

export type JiraIssueOrderByInput = {
  jiraIssueId?: SortOrder;
  jiraProject?: SortOrder;
  jiraId?: SortOrder;
  created?: SortOrder;
  updatedAt?: SortOrder;
  id?: SortOrder;
};
