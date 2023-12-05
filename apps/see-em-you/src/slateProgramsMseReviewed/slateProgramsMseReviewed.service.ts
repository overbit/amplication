import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateProgramsMseReviewedServiceBase } from "./base/slateProgramsMseReviewed.service.base";

@Injectable()
export class SlateProgramsMseReviewedService extends SlateProgramsMseReviewedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
