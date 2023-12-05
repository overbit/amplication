import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateRecommend2ServiceBase } from "./base/slateRecommend2.service.base";

@Injectable()
export class SlateRecommend2Service extends SlateRecommend2ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
