import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MlSupportingCourseworkServiceBase } from "./base/mlSupportingCoursework.service.base";

@Injectable()
export class MlSupportingCourseworkService extends MlSupportingCourseworkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
