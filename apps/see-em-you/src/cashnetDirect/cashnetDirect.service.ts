import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CashnetDirectServiceBase } from "./base/cashnetDirect.service.base";

@Injectable()
export class CashnetDirectService extends CashnetDirectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
