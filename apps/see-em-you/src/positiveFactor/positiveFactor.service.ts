import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PositiveFactorServiceBase } from "./base/positiveFactor.service.base";

@Injectable()
export class PositiveFactorService extends PositiveFactorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
