import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsHsStatusServiceBase } from "./base/usHsStatus.service.base";

@Injectable()
export class UsHsStatusService extends UsHsStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
