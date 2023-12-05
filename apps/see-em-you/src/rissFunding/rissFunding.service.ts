import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RissFundingServiceBase } from "./base/rissFunding.service.base";

@Injectable()
export class RissFundingService extends RissFundingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
