import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MhciPrereqsDesignPortfolioServiceBase } from "./base/mhciPrereqsDesignPortfolio.service.base";

@Injectable()
export class MhciPrereqsDesignPortfolioService extends MhciPrereqsDesignPortfolioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
