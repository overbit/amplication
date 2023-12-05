import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LegacyEthnicityServiceBase } from "./base/legacyEthnicity.service.base";

@Injectable()
export class LegacyEthnicityService extends LegacyEthnicityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
