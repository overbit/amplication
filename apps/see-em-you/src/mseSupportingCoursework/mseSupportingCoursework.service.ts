import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MseSupportingCourseworkServiceBase } from "./base/mseSupportingCoursework.service.base";

@Injectable()
export class MseSupportingCourseworkService extends MseSupportingCourseworkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
