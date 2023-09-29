import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssistantshipServiceBase } from "./base/assistantship.service.base";

@Injectable()
export class AssistantshipService extends AssistantshipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
