import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecommendServiceBase } from "./base/recommend.service.base";

@Injectable()
export class RecommendService extends RecommendServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
