import * as graphql from "@nestjs/graphql";
import { IniFinancialSupportResolverBase } from "./base/iniFinancialSupport.resolver.base";
import { IniFinancialSupport } from "./base/IniFinancialSupport";
import { IniFinancialSupportService } from "./iniFinancialSupport.service";

@graphql.Resolver(() => IniFinancialSupport)
export class IniFinancialSupportResolver extends IniFinancialSupportResolverBase {
  constructor(protected readonly service: IniFinancialSupportService) {
    super(service);
  }
}
