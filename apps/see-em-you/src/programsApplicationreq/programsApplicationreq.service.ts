import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProgramsApplicationreqServiceBase } from "./base/programsApplicationreq.service.base";

@Injectable()
export class ProgramsApplicationreqService extends ProgramsApplicationreqServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
