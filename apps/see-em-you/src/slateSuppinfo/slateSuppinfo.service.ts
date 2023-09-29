import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateSuppinfoServiceBase } from "./base/slateSuppinfo.service.base";

@Injectable()
export class SlateSuppinfoService extends SlateSuppinfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
