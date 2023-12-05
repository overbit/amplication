import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccesslogServiceBase } from "./base/accesslog.service.base";

@Injectable()
export class AccesslogService extends AccesslogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
