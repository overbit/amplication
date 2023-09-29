import * as graphql from "@nestjs/graphql";
import { CcTransactionReportResolverBase } from "./base/ccTransactionReport.resolver.base";
import { CcTransactionReport } from "./base/CcTransactionReport";
import { CcTransactionReportService } from "./ccTransactionReport.service";

@graphql.Resolver(() => CcTransactionReport)
export class CcTransactionReportResolver extends CcTransactionReportResolverBase {
  constructor(protected readonly service: CcTransactionReportService) {
    super(service);
  }
}
