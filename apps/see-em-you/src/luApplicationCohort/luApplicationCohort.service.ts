import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuApplicationCohortServiceBase } from "./base/luApplicationCohort.service.base";

@Injectable()
export class LuApplicationCohortService extends LuApplicationCohortServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
