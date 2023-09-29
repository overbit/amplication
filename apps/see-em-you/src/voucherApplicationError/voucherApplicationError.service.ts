import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VoucherApplicationErrorServiceBase } from "./base/voucherApplicationError.service.base";

@Injectable()
export class VoucherApplicationErrorService extends VoucherApplicationErrorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
