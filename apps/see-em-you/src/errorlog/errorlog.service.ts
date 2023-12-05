import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ErrorlogServiceBase } from "./base/errorlog.service.base";

@Injectable()
export class ErrorlogService extends ErrorlogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
