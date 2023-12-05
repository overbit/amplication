import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuReviewerGroupServiceBase } from "./base/luReviewerGroup.service.base";

@Injectable()
export class LuReviewerGroupService extends LuReviewerGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
