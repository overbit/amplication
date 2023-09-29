import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuApplicationProgramServiceBase } from "./base/luApplicationProgram.service.base";

@Injectable()
export class LuApplicationProgramService extends LuApplicationProgramServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
