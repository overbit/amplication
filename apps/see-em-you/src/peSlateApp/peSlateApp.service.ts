import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PeSlateAppServiceBase } from "./base/peSlateApp.service.base";

@Injectable()
export class PeSlateAppService extends PeSlateAppServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
