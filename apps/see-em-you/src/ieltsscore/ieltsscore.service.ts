import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IeltsscoreServiceBase } from "./base/ieltsscore.service.base";

@Injectable()
export class IeltsscoreService extends IeltsscoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
