import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MitsSlateAppServiceBase } from "./base/mitsSlateApp.service.base";

@Injectable()
export class MitsSlateAppService extends MitsSlateAppServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
