import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateOrgServiceBase } from "./base/slateOrg.service.base";

@Injectable()
export class SlateOrgService extends SlateOrgServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
