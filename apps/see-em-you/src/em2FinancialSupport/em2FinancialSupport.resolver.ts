import * as graphql from "@nestjs/graphql";
import { Em2FinancialSupportResolverBase } from "./base/em2FinancialSupport.resolver.base";
import { Em2FinancialSupport } from "./base/Em2FinancialSupport";
import { Em2FinancialSupportService } from "./em2FinancialSupport.service";

@graphql.Resolver(() => Em2FinancialSupport)
export class Em2FinancialSupportResolver extends Em2FinancialSupportResolverBase {
  constructor(protected readonly service: Em2FinancialSupportService) {
    super(service);
  }
}
