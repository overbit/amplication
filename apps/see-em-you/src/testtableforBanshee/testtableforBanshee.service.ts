import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TesttableforBansheeServiceBase } from "./base/testtableforBanshee.service.base";

@Injectable()
export class TesttableforBansheeService extends TesttableforBansheeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
