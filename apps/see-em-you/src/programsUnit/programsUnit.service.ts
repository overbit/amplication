import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProgramsUnitServiceBase } from "./base/programsUnit.service.base";

@Injectable()
export class ProgramsUnitService extends ProgramsUnitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
