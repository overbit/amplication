import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateAwAppIdServiceBase } from "./base/slateAwAppId.service.base";

@Injectable()
export class SlateAwAppIdService extends SlateAwAppIdServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
