import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReviewIniAdminServiceBase } from "./base/reviewIniAdmin.service.base";

@Injectable()
export class ReviewIniAdminService extends ReviewIniAdminServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
