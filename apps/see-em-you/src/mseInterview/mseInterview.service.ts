import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MseInterviewServiceBase } from "./base/mseInterview.service.base";

@Injectable()
export class MseInterviewService extends MseInterviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
