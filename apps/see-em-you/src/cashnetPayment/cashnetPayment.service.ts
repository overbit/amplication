import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CashnetPaymentServiceBase } from "./base/cashnetPayment.service.base";

@Injectable()
export class CashnetPaymentService extends CashnetPaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
