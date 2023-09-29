import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VoucherServiceBase } from "./base/voucher.service.base";

@Injectable()
export class VoucherService extends VoucherServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
