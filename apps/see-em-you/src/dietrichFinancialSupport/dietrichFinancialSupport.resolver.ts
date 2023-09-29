import * as graphql from "@nestjs/graphql";
import { DietrichFinancialSupportResolverBase } from "./base/dietrichFinancialSupport.resolver.base";
import { DietrichFinancialSupport } from "./base/DietrichFinancialSupport";
import { DietrichFinancialSupportService } from "./dietrichFinancialSupport.service";

@graphql.Resolver(() => DietrichFinancialSupport)
export class DietrichFinancialSupportResolver extends DietrichFinancialSupportResolverBase {
  constructor(protected readonly service: DietrichFinancialSupportService) {
    super(service);
  }
}
