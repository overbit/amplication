import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentNewServiceBase } from "./base/paymentNew.service.base";

@Injectable()
export class PaymentNewService extends PaymentNewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
