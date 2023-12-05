import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MhciPrereqsProgrammingTestServiceBase } from "./base/mhciPrereqsProgrammingTest.service.base";

@Injectable()
export class MhciPrereqsProgrammingTestService extends MhciPrereqsProgrammingTestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
