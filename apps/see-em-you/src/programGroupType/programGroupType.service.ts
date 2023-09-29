import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProgramGroupTypeServiceBase } from "./base/programGroupType.service.base";

@Injectable()
export class ProgramGroupTypeService extends ProgramGroupTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
