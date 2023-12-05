import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EthnicityServiceBase } from "./base/ethnicity.service.base";

@Injectable()
export class EthnicityService extends EthnicityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
