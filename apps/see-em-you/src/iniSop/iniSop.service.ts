import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IniSopServiceBase } from "./base/iniSop.service.base";

@Injectable()
export class IniSopService extends IniSopServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
