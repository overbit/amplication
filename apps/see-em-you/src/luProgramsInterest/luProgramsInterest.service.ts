import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuProgramsInterestServiceBase } from "./base/luProgramsInterest.service.base";

@Injectable()
export class LuProgramsInterestService extends LuProgramsInterestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
