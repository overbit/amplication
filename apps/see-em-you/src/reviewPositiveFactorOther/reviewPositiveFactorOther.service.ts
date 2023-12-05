import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReviewPositiveFactorOtherServiceBase } from "./base/reviewPositiveFactorOther.service.base";

@Injectable()
export class ReviewPositiveFactorOtherService extends ReviewPositiveFactorOtherServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
