import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JiraIssueServiceBase } from "./base/jiraIssue.service.base";

@Injectable()
export class JiraIssueService extends JiraIssueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
