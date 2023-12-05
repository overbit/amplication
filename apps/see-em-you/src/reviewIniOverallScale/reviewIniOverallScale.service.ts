import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReviewIniOverallScaleServiceBase } from "./base/reviewIniOverallScale.service.base";

@Injectable()
export class ReviewIniOverallScaleService extends ReviewIniOverallScaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
