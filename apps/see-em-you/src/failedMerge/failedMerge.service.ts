import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FailedMergeServiceBase } from "./base/failedMerge.service.base";

@Injectable()
export class FailedMergeService extends FailedMergeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
