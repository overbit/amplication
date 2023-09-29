import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProgramGroupGroupTypeServiceBase } from "./base/programGroupGroupType.service.base";

@Injectable()
export class ProgramGroupGroupTypeService extends ProgramGroupGroupTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
