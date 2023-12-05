import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParentInfoServiceBase } from "./base/parentInfo.service.base";

@Injectable()
export class ParentInfoService extends ParentInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
