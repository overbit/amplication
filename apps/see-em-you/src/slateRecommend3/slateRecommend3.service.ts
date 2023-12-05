import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateRecommend3ServiceBase } from "./base/slateRecommend3.service.base";

@Injectable()
export class SlateRecommend3Service extends SlateRecommend3ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
