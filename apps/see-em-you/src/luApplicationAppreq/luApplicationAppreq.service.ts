import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuApplicationAppreqServiceBase } from "./base/luApplicationAppreq.service.base";

@Injectable()
export class LuApplicationAppreqService extends LuApplicationAppreqServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
