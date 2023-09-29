import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CcTransactionReportServiceBase } from "./base/ccTransactionReport.service.base";

@Injectable()
export class CcTransactionReportService extends CcTransactionReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
