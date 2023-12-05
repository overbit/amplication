import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentItemServiceBase } from "./base/paymentItem.service.base";

@Injectable()
export class PaymentItemService extends PaymentItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
