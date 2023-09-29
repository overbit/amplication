import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EtsToeflScoreServiceBase } from "./base/etsToeflScore.service.base";

@Injectable()
export class EtsToeflScoreService extends EtsToeflScoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
