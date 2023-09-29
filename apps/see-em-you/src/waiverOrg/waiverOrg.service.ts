import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WaiverOrgServiceBase } from "./base/waiverOrg.service.base";

@Injectable()
export class WaiverOrgService extends WaiverOrgServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
