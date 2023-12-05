import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VoucherTypeServiceBase } from "./base/voucherType.service.base";

@Injectable()
export class VoucherTypeService extends VoucherTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
