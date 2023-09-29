import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExceptionAppServiceBase } from "./base/exceptionApp.service.base";

@Injectable()
export class ExceptionAppService extends ExceptionAppServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
