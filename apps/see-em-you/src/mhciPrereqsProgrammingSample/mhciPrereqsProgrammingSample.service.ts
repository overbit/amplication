import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MhciPrereqsProgrammingSampleServiceBase } from "./base/mhciPrereqsProgrammingSample.service.base";

@Injectable()
export class MhciPrereqsProgrammingSampleService extends MhciPrereqsProgrammingSampleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
