import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuApplicationGroupServiceBase } from "./base/luApplicationGroup.service.base";

@Injectable()
export class LuApplicationGroupService extends LuApplicationGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
