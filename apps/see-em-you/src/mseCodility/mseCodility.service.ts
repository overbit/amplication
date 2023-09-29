import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MseCodilityServiceBase } from "./base/mseCodility.service.base";

@Injectable()
export class MseCodilityService extends MseCodilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
