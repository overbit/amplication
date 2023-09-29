import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JiraIssueService } from "./jiraIssue.service";
import { JiraIssueControllerBase } from "./base/jiraIssue.controller.base";

@swagger.ApiTags("jiraIssues")
@common.Controller("jiraIssues")
export class JiraIssueController extends JiraIssueControllerBase {
  constructor(protected readonly service: JiraIssueService) {
    super(service);
  }
}
