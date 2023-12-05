import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MseLetterRecsDecisionServiceBase } from "./base/mseLetterRecsDecision.service.base";

@Injectable()
export class MseLetterRecsDecisionService extends MseLetterRecsDecisionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
