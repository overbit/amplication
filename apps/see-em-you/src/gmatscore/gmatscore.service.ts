import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GmatscoreServiceBase } from "./base/gmatscore.service.base";

@Injectable()
export class GmatscoreService extends GmatscoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
