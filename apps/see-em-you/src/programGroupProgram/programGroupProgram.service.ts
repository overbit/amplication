import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProgramGroupProgramServiceBase } from "./base/programGroupProgram.service.base";

@Injectable()
export class ProgramGroupProgramService extends ProgramGroupProgramServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
