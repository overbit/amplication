import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RegistrationFeePaymentServiceBase } from "./base/registrationFeePayment.service.base";

@Injectable()
export class RegistrationFeePaymentService extends RegistrationFeePaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
