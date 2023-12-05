import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LtiMastersAdmitServiceBase } from "./base/ltiMastersAdmit.service.base";

@Injectable()
export class LtiMastersAdmitService extends LtiMastersAdmitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
