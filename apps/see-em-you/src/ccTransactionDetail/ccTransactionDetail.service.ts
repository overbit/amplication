import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CcTransactionDetailServiceBase } from "./base/ccTransactionDetail.service.base";

@Injectable()
export class CcTransactionDetailService extends CcTransactionDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
