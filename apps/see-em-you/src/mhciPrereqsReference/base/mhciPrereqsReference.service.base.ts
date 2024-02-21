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
  MhciPrereqsReference as PrismaMhciPrereqsReference,
} from "@prisma/client";

export class MhciPrereqsReferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MhciPrereqsReferenceCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MhciPrereqsReferenceCountArgs>
  ): Promise<number> {
    return this.prisma.mhciPrereqsReference.count(args);
  }

  async mhciPrereqsReferences<
    T extends Prisma.MhciPrereqsReferenceFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MhciPrereqsReferenceFindManyArgs>
  ): Promise<PrismaMhciPrereqsReference[]> {
    return this.prisma.mhciPrereqsReference.findMany(args);
  }
  async mhciPrereqsReference<
    T extends Prisma.MhciPrereqsReferenceFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MhciPrereqsReferenceFindUniqueArgs>
  ): Promise<PrismaMhciPrereqsReference | null> {
    return this.prisma.mhciPrereqsReference.findUnique(args);
  }
  async createMhciPrereqsReference<
    T extends Prisma.MhciPrereqsReferenceCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MhciPrereqsReferenceCreateArgs>
  ): Promise<PrismaMhciPrereqsReference> {
    return this.prisma.mhciPrereqsReference.create<T>(args);
  }
  async updateMhciPrereqsReference<
    T extends Prisma.MhciPrereqsReferenceUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MhciPrereqsReferenceUpdateArgs>
  ): Promise<PrismaMhciPrereqsReference> {
    return this.prisma.mhciPrereqsReference.update<T>(args);
  }
  async deleteMhciPrereqsReference<
    T extends Prisma.MhciPrereqsReferenceDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MhciPrereqsReferenceDeleteArgs>
  ): Promise<PrismaMhciPrereqsReference> {
    return this.prisma.mhciPrereqsReference.delete(args);
  }
}
