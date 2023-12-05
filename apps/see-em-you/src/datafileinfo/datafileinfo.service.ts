import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DatafileinfoServiceBase } from "./base/datafileinfo.service.base";

@Injectable()
export class DatafileinfoService extends DatafileinfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
