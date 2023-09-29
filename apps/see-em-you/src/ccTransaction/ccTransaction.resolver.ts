import * as graphql from "@nestjs/graphql";
import { CcTransactionResolverBase } from "./base/ccTransaction.resolver.base";
import { CcTransaction } from "./base/CcTransaction";
import { CcTransactionService } from "./ccTransaction.service";

@graphql.Resolver(() => CcTransaction)
export class CcTransactionResolver extends CcTransactionResolverBase {
  constructor(protected readonly service: CcTransactionService) {
    super(service);
  }
}
