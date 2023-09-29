import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateAppsMseReviewedServiceBase } from "./base/slateAppsMseReviewed.service.base";

@Injectable()
export class SlateAppsMseReviewedService extends SlateAppsMseReviewedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
