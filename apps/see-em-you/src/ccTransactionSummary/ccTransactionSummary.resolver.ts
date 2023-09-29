import * as graphql from "@nestjs/graphql";
import { CcTransactionSummaryResolverBase } from "./base/ccTransactionSummary.resolver.base";
import { CcTransactionSummary } from "./base/CcTransactionSummary";
import { CcTransactionSummaryService } from "./ccTransactionSummary.service";

@graphql.Resolver(() => CcTransactionSummary)
export class CcTransactionSummaryResolver extends CcTransactionSummaryResolverBase {
  constructor(protected readonly service: CcTransactionSummaryService) {
    super(service);
  }
}
