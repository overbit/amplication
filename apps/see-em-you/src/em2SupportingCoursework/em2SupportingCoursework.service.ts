import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Em2SupportingCourseworkServiceBase } from "./base/em2SupportingCoursework.service.base";

@Injectable()
export class Em2SupportingCourseworkService extends Em2SupportingCourseworkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
