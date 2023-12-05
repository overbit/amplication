import { Module } from "@nestjs/common";
import { MhciPrereqsDesignPortfolioModuleBase } from "./base/mhciPrereqsDesignPortfolio.module.base";
import { MhciPrereqsDesignPortfolioService } from "./mhciPrereqsDesignPortfolio.service";
import { MhciPrereqsDesignPortfolioController } from "./mhciPrereqsDesignPortfolio.controller";
import { MhciPrereqsDesignPortfolioResolver } from "./mhciPrereqsDesignPortfolio.resolver";

@Module({
  imports: [MhciPrereqsDesignPortfolioModuleBase],
  controllers: [MhciPrereqsDesignPortfolioController],
  providers: [
    MhciPrereqsDesignPortfolioService,
    MhciPrereqsDesignPortfolioResolver,
  ],
  exports: [MhciPrereqsDesignPortfolioService],
})
export class MhciPrereqsDesignPortfolioModule {}
