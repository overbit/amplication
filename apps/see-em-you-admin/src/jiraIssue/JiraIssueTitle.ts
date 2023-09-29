import { JiraIssue as TJiraIssue } from "../api/jiraIssue/JiraIssue";

export const JIRAISSUE_TITLE_FIELD = "jiraProject";

export const JiraIssueTitle = (record: TJiraIssue): string => {
  return record.jiraProject?.toString() || String(record.id);
};
