import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateRecommend1ServiceBase } from "./base/slateRecommend1.service.base";

@Injectable()
export class SlateRecommend1Service extends SlateRecommend1ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
