import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecommendformServiceBase } from "./base/recommendform.service.base";

@Injectable()
export class RecommendformService extends RecommendformServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
