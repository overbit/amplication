import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RejectionWaiverServiceBase } from "./base/rejectionWaiver.service.base";

@Injectable()
export class RejectionWaiverService extends RejectionWaiverServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
