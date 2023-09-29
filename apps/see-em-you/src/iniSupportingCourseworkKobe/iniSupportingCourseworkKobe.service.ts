import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IniSupportingCourseworkKobeServiceBase } from "./base/iniSupportingCourseworkKobe.service.base";

@Injectable()
export class IniSupportingCourseworkKobeService extends IniSupportingCourseworkKobeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
