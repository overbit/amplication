import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MhciPrereqServiceBase } from "./base/mhciPrereq.service.base";

@Injectable()
export class MhciPrereqService extends MhciPrereqServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
