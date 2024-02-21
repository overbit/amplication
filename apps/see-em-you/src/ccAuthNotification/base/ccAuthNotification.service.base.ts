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
  CcAuthNotification as PrismaCcAuthNotification,
} from "@prisma/client";

export class CcAuthNotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CcAuthNotificationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CcAuthNotificationCountArgs>
  ): Promise<number> {
    return this.prisma.ccAuthNotification.count(args);
  }

  async ccAuthNotifications<T extends Prisma.CcAuthNotificationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CcAuthNotificationFindManyArgs>
  ): Promise<PrismaCcAuthNotification[]> {
    return this.prisma.ccAuthNotification.findMany(args);
  }
  async ccAuthNotification<T extends Prisma.CcAuthNotificationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CcAuthNotificationFindUniqueArgs>
  ): Promise<PrismaCcAuthNotification | null> {
    return this.prisma.ccAuthNotification.findUnique(args);
  }
  async createCcAuthNotification<T extends Prisma.CcAuthNotificationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CcAuthNotificationCreateArgs>
  ): Promise<PrismaCcAuthNotification> {
    return this.prisma.ccAuthNotification.create<T>(args);
  }
  async updateCcAuthNotification<T extends Prisma.CcAuthNotificationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CcAuthNotificationUpdateArgs>
  ): Promise<PrismaCcAuthNotification> {
    return this.prisma.ccAuthNotification.update<T>(args);
  }
  async deleteCcAuthNotification<T extends Prisma.CcAuthNotificationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CcAuthNotificationDeleteArgs>
  ): Promise<PrismaCcAuthNotification> {
    return this.prisma.ccAuthNotification.delete(args);
  }
}
