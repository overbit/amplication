import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Em2FinancialSupportServiceBase } from "./base/em2FinancialSupport.service.base";

@Injectable()
export class Em2FinancialSupportService extends Em2FinancialSupportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
