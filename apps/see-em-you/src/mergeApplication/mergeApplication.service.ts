import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MergeApplicationServiceBase } from "./base/mergeApplication.service.base";

@Injectable()
export class MergeApplicationService extends MergeApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
