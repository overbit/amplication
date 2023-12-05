import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReviewPositiveFactorServiceBase } from "./base/reviewPositiveFactor.service.base";

@Injectable()
export class ReviewPositiveFactorService extends ReviewPositiveFactorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
