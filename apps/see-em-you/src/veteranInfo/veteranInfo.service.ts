import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VeteranInfoServiceBase } from "./base/veteranInfo.service.base";

@Injectable()
export class VeteranInfoService extends VeteranInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
