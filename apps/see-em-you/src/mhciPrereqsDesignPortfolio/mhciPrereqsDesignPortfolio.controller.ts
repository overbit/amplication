import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MhciPrereqsDesignPortfolioService } from "./mhciPrereqsDesignPortfolio.service";
import { MhciPrereqsDesignPortfolioControllerBase } from "./base/mhciPrereqsDesignPortfolio.controller.base";

@swagger.ApiTags("mhciPrereqsDesignPortfolios")
@common.Controller("mhciPrereqsDesignPortfolios")
export class MhciPrereqsDesignPortfolioController extends MhciPrereqsDesignPortfolioControllerBase {
  constructor(protected readonly service: MhciPrereqsDesignPortfolioService) {
    super(service);
  }
}
