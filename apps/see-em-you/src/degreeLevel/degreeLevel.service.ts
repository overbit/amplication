import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DegreeLevelServiceBase } from "./base/degreeLevel.service.base";

@Injectable()
export class DegreeLevelService extends DegreeLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
