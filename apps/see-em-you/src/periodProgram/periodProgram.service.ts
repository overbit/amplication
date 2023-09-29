import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PeriodProgramServiceBase } from "./base/periodProgram.service.base";

@Injectable()
export class PeriodProgramService extends PeriodProgramServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
