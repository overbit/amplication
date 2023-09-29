import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DuolingoscoreServiceBase } from "./base/duolingoscore.service.base";

@Injectable()
export class DuolingoscoreService extends DuolingoscoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
