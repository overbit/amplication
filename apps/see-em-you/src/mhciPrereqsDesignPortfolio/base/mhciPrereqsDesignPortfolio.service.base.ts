/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  MhciPrereqsDesignPortfolio, // @ts-ignore
  LuUsersUsertype,
} from "@prisma/client";

export class MhciPrereqsDesignPortfolioServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MhciPrereqsDesignPortfolioCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MhciPrereqsDesignPortfolioCountArgs>
  ): Promise<number> {
    return this.prisma.mhciPrereqsDesignPortfolio.count(args);
  }

  async mhciPrereqsDesignPortfolios<
    T extends Prisma.MhciPrereqsDesignPortfolioFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MhciPrereqsDesignPortfolioFindManyArgs>
  ): Promise<MhciPrereqsDesignPortfolio[]> {
    return this.prisma.mhciPrereqsDesignPortfolio.findMany(args);
  }
  async mhciPrereqsDesignPortfolio<
    T extends Prisma.MhciPrereqsDesignPortfolioFindUniqueArgs
  >(
    args: Prisma.SelectSubset<
      T,
      Prisma.MhciPrereqsDesignPortfolioFindUniqueArgs
    >
  ): Promise<MhciPrereqsDesignPortfolio | null> {
    return this.prisma.mhciPrereqsDesignPortfolio.findUnique(args);
  }
  async createMhciPrereqsDesignPortfolio<
    T extends Prisma.MhciPrereqsDesignPortfolioCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MhciPrereqsDesignPortfolioCreateArgs>
  ): Promise<MhciPrereqsDesignPortfolio> {
    return this.prisma.mhciPrereqsDesignPortfolio.create<T>(args);
  }
  async updateMhciPrereqsDesignPortfolio<
    T extends Prisma.MhciPrereqsDesignPortfolioUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MhciPrereqsDesignPortfolioUpdateArgs>
  ): Promise<MhciPrereqsDesignPortfolio> {
    return this.prisma.mhciPrereqsDesignPortfolio.update<T>(args);
  }
  async deleteMhciPrereqsDesignPortfolio<
    T extends Prisma.MhciPrereqsDesignPortfolioDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MhciPrereqsDesignPortfolioDeleteArgs>
  ): Promise<MhciPrereqsDesignPortfolio> {
    return this.prisma.mhciPrereqsDesignPortfolio.delete(args);
  }

  async getLuUsersUsertypes(parentId: number): Promise<LuUsersUsertype | null> {
    return this.prisma.mhciPrereqsDesignPortfolio
      .findUnique({
        where: { id: parentId },
      })
      .luUsersUsertypes();
  }
}
