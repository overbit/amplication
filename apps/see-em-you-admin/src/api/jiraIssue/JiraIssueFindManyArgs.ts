import { JiraIssueWhereInput } from "./JiraIssueWhereInput";
import { JiraIssueOrderByInput } from "./JiraIssueOrderByInput";

export type JiraIssueFindManyArgs = {
  where?: JiraIssueWhereInput;
  orderBy?: Array<JiraIssueOrderByInput>;
  skip?: number;
  take?: number;
};
