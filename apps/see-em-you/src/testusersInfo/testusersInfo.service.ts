import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TestusersInfoServiceBase } from "./base/testusersInfo.service.base";

@Injectable()
export class TestusersInfoService extends TestusersInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
