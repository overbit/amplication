import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateTestScoreServiceBase } from "./base/slateTestScore.service.base";

@Injectable()
export class SlateTestScoreService extends SlateTestScoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
