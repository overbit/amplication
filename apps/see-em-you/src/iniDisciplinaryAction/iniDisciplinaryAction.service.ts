import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IniDisciplinaryActionServiceBase } from "./base/iniDisciplinaryAction.service.base";

@Injectable()
export class IniDisciplinaryActionService extends IniDisciplinaryActionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
