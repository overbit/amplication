import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DuolingoDataCopyServiceBase } from "./base/duolingoDataCopy.service.base";

@Injectable()
export class DuolingoDataCopyService extends DuolingoDataCopyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
