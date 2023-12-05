import * as graphql from "@nestjs/graphql";
import { PeriodTypeResolverBase } from "./base/periodType.resolver.base";
import { PeriodType } from "./base/PeriodType";
import { PeriodTypeService } from "./periodType.service";

@graphql.Resolver(() => PeriodType)
export class PeriodTypeResolver extends PeriodTypeResolverBase {
  constructor(protected readonly service: PeriodTypeService) {
    super(service);
  }
}
