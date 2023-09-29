import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuApplicationAdvisorServiceBase } from "./base/luApplicationAdvisor.service.base";

@Injectable()
export class LuApplicationAdvisorService extends LuApplicationAdvisorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
