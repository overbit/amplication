import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AcoPalServiceBase } from "./base/acoPal.service.base";

@Injectable()
export class AcoPalService extends AcoPalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
