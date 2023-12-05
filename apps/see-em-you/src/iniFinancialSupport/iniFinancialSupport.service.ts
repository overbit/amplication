import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IniFinancialSupportServiceBase } from "./base/iniFinancialSupport.service.base";

@Injectable()
export class IniFinancialSupportService extends IniFinancialSupportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
