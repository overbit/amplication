import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContenttypeServiceBase } from "./base/contenttype.service.base";

@Injectable()
export class ContenttypeService extends ContenttypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
