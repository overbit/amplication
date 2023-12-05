import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationContentServiceBase } from "./base/applicationContent.service.base";

@Injectable()
export class ApplicationContentService extends ApplicationContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
