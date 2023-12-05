import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GresubjectscoreServiceBase } from "./base/gresubjectscore.service.base";

@Injectable()
export class GresubjectscoreService extends GresubjectscoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
