import { Module } from "@nestjs/common";
import { JiraIssueModuleBase } from "./base/jiraIssue.module.base";
import { JiraIssueService } from "./jiraIssue.service";
import { JiraIssueController } from "./jiraIssue.controller";
import { JiraIssueResolver } from "./jiraIssue.resolver";

@Module({
  imports: [JiraIssueModuleBase],
  controllers: [JiraIssueController],
  providers: [JiraIssueService, JiraIssueResolver],
  exports: [JiraIssueService],
})
export class JiraIssueModule {}
