import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RissMcnairServiceBase } from "./base/rissMcnair.service.base";

@Injectable()
export class RissMcnairService extends RissMcnairServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
