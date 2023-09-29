import * as graphql from "@nestjs/graphql";
import { CcTransactionDetailResolverBase } from "./base/ccTransactionDetail.resolver.base";
import { CcTransactionDetail } from "./base/CcTransactionDetail";
import { CcTransactionDetailService } from "./ccTransactionDetail.service";

@graphql.Resolver(() => CcTransactionDetail)
export class CcTransactionDetailResolver extends CcTransactionDetailResolverBase {
  constructor(protected readonly service: CcTransactionDetailService) {
    super(service);
  }
}
