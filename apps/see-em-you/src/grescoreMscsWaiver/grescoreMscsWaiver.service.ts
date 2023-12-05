import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GrescoreMscsWaiverServiceBase } from "./base/grescoreMscsWaiver.service.base";

@Injectable()
export class GrescoreMscsWaiverService extends GrescoreMscsWaiverServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
