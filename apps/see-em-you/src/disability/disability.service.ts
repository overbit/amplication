import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DisabilityServiceBase } from "./base/disability.service.base";

@Injectable()
export class DisabilityService extends DisabilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
