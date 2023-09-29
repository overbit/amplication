import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScsUserServiceBase } from "./base/scsUser.service.base";

@Injectable()
export class ScsUserService extends ScsUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
