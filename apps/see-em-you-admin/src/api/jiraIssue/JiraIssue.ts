export type JiraIssue = {
  created: Date;
  id: string;
  jiraId: bigint;
  jiraIssueId: number;
  jiraProject: string;
  updatedAt: Date;
};
