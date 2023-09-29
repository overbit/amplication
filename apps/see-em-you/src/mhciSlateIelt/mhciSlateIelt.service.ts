import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MhciSlateIeltServiceBase } from "./base/mhciSlateIelt.service.base";

@Injectable()
export class MhciSlateIeltService extends MhciSlateIeltServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
