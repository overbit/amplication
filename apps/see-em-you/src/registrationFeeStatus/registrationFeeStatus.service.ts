import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RegistrationFeeStatusServiceBase } from "./base/registrationFeeStatus.service.base";

@Injectable()
export class RegistrationFeeStatusService extends RegistrationFeeStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
