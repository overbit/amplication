import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DietrichFinancialSupportServiceBase } from "./base/dietrichFinancialSupport.service.base";

@Injectable()
export class DietrichFinancialSupportService extends DietrichFinancialSupportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
