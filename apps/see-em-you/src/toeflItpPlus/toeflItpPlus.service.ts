import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ToeflItpPlusServiceBase } from "./base/toeflItpPlus.service.base";

@Injectable()
export class ToeflItpPlusService extends ToeflItpPlusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
