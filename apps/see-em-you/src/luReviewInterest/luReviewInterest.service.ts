import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuReviewInterestServiceBase } from "./base/luReviewInterest.service.base";

@Injectable()
export class LuReviewInterestService extends LuReviewInterestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
