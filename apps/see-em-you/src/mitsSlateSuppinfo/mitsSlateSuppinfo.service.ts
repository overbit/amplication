import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MitsSlateSuppinfoServiceBase } from "./base/mitsSlateSuppinfo.service.base";

@Injectable()
export class MitsSlateSuppinfoService extends MitsSlateSuppinfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
