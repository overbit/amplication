import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DuolingoDatumServiceBase } from "./base/duolingoDatum.service.base";

@Injectable()
export class DuolingoDatumService extends DuolingoDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
