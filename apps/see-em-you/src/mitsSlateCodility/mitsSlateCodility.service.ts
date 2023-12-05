import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MitsSlateCodilityServiceBase } from "./base/mitsSlateCodility.service.base";

@Injectable()
export class MitsSlateCodilityService extends MitsSlateCodilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
