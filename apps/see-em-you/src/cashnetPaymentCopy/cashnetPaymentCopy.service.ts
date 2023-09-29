import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CashnetPaymentCopyServiceBase } from "./base/cashnetPaymentCopy.service.base";

@Injectable()
export class CashnetPaymentCopyService extends CashnetPaymentCopyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
