import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WaiverApplicationServiceBase } from "./base/waiverApplication.service.base";

@Injectable()
export class WaiverApplicationService extends WaiverApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
