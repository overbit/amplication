import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScsUserWebisoServiceBase } from "./base/scsUserWebiso.service.base";

@Injectable()
export class ScsUserWebisoService extends ScsUserWebisoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
