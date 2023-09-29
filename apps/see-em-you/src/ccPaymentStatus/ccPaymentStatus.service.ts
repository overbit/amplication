import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CcPaymentStatusServiceBase } from "./base/ccPaymentStatus.service.base";

@Injectable()
export class CcPaymentStatusService extends CcPaymentStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
