import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CcTransactionServiceBase } from "./base/ccTransaction.service.base";

@Injectable()
export class CcTransactionService extends CcTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
