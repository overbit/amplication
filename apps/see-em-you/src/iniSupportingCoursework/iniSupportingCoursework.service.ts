import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IniSupportingCourseworkServiceBase } from "./base/iniSupportingCoursework.service.base";

@Injectable()
export class IniSupportingCourseworkService extends IniSupportingCourseworkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
