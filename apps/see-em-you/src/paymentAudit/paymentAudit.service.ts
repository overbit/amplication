import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentAuditServiceBase } from "./base/paymentAudit.service.base";

@Injectable()
export class PaymentAuditService extends PaymentAuditServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
