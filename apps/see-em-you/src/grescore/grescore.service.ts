import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GrescoreServiceBase } from "./base/grescore.service.base";

@Injectable()
export class GrescoreService extends GrescoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
