import * as graphql from "@nestjs/graphql";
import { CashnetDirectResolverBase } from "./base/cashnetDirect.resolver.base";
import { CashnetDirect } from "./base/CashnetDirect";
import { CashnetDirectService } from "./cashnetDirect.service";

@graphql.Resolver(() => CashnetDirect)
export class CashnetDirectResolver extends CashnetDirectResolverBase {
  constructor(protected readonly service: CashnetDirectService) {
    super(service);
  }
}
