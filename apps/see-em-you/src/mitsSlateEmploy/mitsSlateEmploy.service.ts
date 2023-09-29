import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MitsSlateEmployServiceBase } from "./base/mitsSlateEmploy.service.base";

@Injectable()
export class MitsSlateEmployService extends MitsSlateEmployServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
