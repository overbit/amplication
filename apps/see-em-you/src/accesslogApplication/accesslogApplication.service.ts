import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccesslogApplicationServiceBase } from "./base/accesslogApplication.service.base";

@Injectable()
export class AccesslogApplicationService extends AccesslogApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
