/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PaymentAudit as PrismaPaymentAudit } from "@prisma/client";

export class PaymentAuditServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PaymentAuditCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentAuditCountArgs>
  ): Promise<number> {
    return this.prisma.paymentAudit.count(args);
  }

  async paymentAudits<T extends Prisma.PaymentAuditFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentAuditFindManyArgs>
  ): Promise<PrismaPaymentAudit[]> {
    return this.prisma.paymentAudit.findMany(args);
  }
  async paymentAudit<T extends Prisma.PaymentAuditFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentAuditFindUniqueArgs>
  ): Promise<PrismaPaymentAudit | null> {
    return this.prisma.paymentAudit.findUnique(args);
  }
  async createPaymentAudit<T extends Prisma.PaymentAuditCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentAuditCreateArgs>
  ): Promise<PrismaPaymentAudit> {
    return this.prisma.paymentAudit.create<T>(args);
  }
  async updatePaymentAudit<T extends Prisma.PaymentAuditUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentAuditUpdateArgs>
  ): Promise<PrismaPaymentAudit> {
    return this.prisma.paymentAudit.update<T>(args);
  }
  async deletePaymentAudit<T extends Prisma.PaymentAuditDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentAuditDeleteArgs>
  ): Promise<PrismaPaymentAudit> {
    return this.prisma.paymentAudit.delete(args);
  }
}
