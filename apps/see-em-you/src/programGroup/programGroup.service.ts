import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProgramGroupServiceBase } from "./base/programGroup.service.base";

@Injectable()
export class ProgramGroupService extends ProgramGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
