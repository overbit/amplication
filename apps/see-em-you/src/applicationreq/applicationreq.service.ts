import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationreqServiceBase } from "./base/applicationreq.service.base";

@Injectable()
export class ApplicationreqService extends ApplicationreqServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
