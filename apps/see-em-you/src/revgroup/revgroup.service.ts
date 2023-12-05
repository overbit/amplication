import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RevgroupServiceBase } from "./base/revgroup.service.base";

@Injectable()
export class RevgroupService extends RevgroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
