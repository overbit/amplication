import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DisabilityTypeServiceBase } from "./base/disabilityType.service.base";

@Injectable()
export class DisabilityTypeService extends DisabilityTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
