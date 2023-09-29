import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateCodilityServiceBase } from "./base/slateCodility.service.base";

@Injectable()
export class SlateCodilityService extends SlateCodilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
