import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuProgramsApplicationreqServiceBase } from "./base/luProgramsApplicationreq.service.base";

@Injectable()
export class LuProgramsApplicationreqService extends LuProgramsApplicationreqServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
