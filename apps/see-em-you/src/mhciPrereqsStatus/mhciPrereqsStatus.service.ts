import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MhciPrereqsStatusServiceBase } from "./base/mhciPrereqsStatus.service.base";

@Injectable()
export class MhciPrereqsStatusService extends MhciPrereqsStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
