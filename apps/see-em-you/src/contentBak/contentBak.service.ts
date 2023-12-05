import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContentBakServiceBase } from "./base/contentBak.service.base";

@Injectable()
export class ContentBakService extends ContentBakServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
