import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuDegreesApplicationreqServiceBase } from "./base/luDegreesApplicationreq.service.base";

@Injectable()
export class LuDegreesApplicationreqService extends LuDegreesApplicationreqServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
