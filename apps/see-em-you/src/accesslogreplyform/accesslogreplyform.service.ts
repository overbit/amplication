import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccesslogreplyformServiceBase } from "./base/accesslogreplyform.service.base";

@Injectable()
export class AccesslogreplyformService extends AccesslogreplyformServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
