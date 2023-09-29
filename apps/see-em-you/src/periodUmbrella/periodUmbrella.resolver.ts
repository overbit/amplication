import * as graphql from "@nestjs/graphql";
import { PeriodUmbrellaResolverBase } from "./base/periodUmbrella.resolver.base";
import { PeriodUmbrella } from "./base/PeriodUmbrella";
import { PeriodUmbrellaService } from "./periodUmbrella.service";

@graphql.Resolver(() => PeriodUmbrella)
export class PeriodUmbrellaResolver extends PeriodUmbrellaResolverBase {
  constructor(protected readonly service: PeriodUmbrellaService) {
    super(service);
  }
}
