import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProgramTypeServiceBase } from "./base/programType.service.base";

@Injectable()
export class ProgramTypeService extends ProgramTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
