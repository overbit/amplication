import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MhciSlateAppServiceBase } from "./base/mhciSlateApp.service.base";

@Injectable()
export class MhciSlateAppService extends MhciSlateAppServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
