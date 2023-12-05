import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VoucherApplicationServiceBase } from "./base/voucherApplication.service.base";

@Injectable()
export class VoucherApplicationService extends VoucherApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
