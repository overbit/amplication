import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReviewIniServiceBase } from "./base/reviewIni.service.base";

@Injectable()
export class ReviewIniService extends ReviewIniServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
