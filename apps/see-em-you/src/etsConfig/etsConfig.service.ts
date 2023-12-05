import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EtsConfigServiceBase } from "./base/etsConfig.service.base";

@Injectable()
export class EtsConfigService extends EtsConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
