import * as graphql from "@nestjs/graphql";
import { MhciPrereqsDesignPortfolioResolverBase } from "./base/mhciPrereqsDesignPortfolio.resolver.base";
import { MhciPrereqsDesignPortfolio } from "./base/MhciPrereqsDesignPortfolio";
import { MhciPrereqsDesignPortfolioService } from "./mhciPrereqsDesignPortfolio.service";

@graphql.Resolver(() => MhciPrereqsDesignPortfolio)
export class MhciPrereqsDesignPortfolioResolver extends MhciPrereqsDesignPortfolioResolverBase {
  constructor(protected readonly service: MhciPrereqsDesignPortfolioService) {
    super(service);
  }
}
