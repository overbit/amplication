import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpecialConsiderationServiceBase } from "./base/specialConsideration.service.base";

@Injectable()
export class SpecialConsiderationService extends SpecialConsiderationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
