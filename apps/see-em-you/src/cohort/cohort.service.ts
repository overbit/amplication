import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CohortServiceBase } from "./base/cohort.service.base";

@Injectable()
export class CohortService extends CohortServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
