import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateAppServiceBase } from "./base/slateApp.service.base";

@Injectable()
export class SlateAppService extends SlateAppServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
