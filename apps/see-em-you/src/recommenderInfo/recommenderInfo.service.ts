import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecommenderInfoServiceBase } from "./base/recommenderInfo.service.base";

@Injectable()
export class RecommenderInfoService extends RecommenderInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
