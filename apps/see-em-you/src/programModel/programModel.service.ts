import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProgramModelServiceBase } from "./base/programModel.service.base";

@Injectable()
export class ProgramModelService extends ProgramModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
