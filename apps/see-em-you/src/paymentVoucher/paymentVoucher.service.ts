import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentVoucherServiceBase } from "./base/paymentVoucher.service.base";

@Injectable()
export class PaymentVoucherService extends PaymentVoucherServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
