import * as graphql from "@nestjs/graphql";
import { JiraIssueResolverBase } from "./base/jiraIssue.resolver.base";
import { JiraIssue } from "./base/JiraIssue";
import { JiraIssueService } from "./jiraIssue.service";

@graphql.Resolver(() => JiraIssue)
export class JiraIssueResolver extends JiraIssueResolverBase {
  constructor(protected readonly service: JiraIssueService) {
    super(service);
  }
}
