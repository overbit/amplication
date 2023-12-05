import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecommendationtypeServiceBase } from "./base/recommendationtype.service.base";

@Injectable()
export class RecommendationtypeService extends RecommendationtypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
