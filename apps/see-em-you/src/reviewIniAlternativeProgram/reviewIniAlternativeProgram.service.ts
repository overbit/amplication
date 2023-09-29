import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReviewIniAlternativeProgramServiceBase } from "./base/reviewIniAlternativeProgram.service.base";

@Injectable()
export class ReviewIniAlternativeProgramService extends ReviewIniAlternativeProgramServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
