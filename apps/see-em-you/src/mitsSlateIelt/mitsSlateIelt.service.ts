import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MitsSlateIeltServiceBase } from "./base/mitsSlateIelt.service.base";

@Injectable()
export class MitsSlateIeltService extends MitsSlateIeltServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
