import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RequestsAccessServiceBase } from "./base/requestsAccess.service.base";

@Injectable()
export class RequestsAccessService extends RequestsAccessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
