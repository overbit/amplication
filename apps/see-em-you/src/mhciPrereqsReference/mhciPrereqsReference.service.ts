import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MhciPrereqsReferenceServiceBase } from "./base/mhciPrereqsReference.service.base";

@Injectable()
export class MhciPrereqsReferenceService extends MhciPrereqsReferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
