import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateLangCodeServiceBase } from "./base/slateLangCode.service.base";

@Injectable()
export class SlateLangCodeService extends SlateLangCodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
