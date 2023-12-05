import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateProgramServiceBase } from "./base/slateProgram.service.base";

@Injectable()
export class SlateProgramService extends SlateProgramServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
