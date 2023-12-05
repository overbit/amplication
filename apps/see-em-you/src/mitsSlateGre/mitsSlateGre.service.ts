import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MitsSlateGreServiceBase } from "./base/mitsSlateGre.service.base";

@Injectable()
export class MitsSlateGreService extends MitsSlateGreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
