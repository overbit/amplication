import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SystemenvServiceBase } from "./base/systemenv.service.base";

@Injectable()
export class SystemenvService extends SystemenvServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
