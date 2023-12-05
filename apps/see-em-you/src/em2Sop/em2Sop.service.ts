import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Em2SopServiceBase } from "./base/em2Sop.service.base";

@Injectable()
export class Em2SopService extends Em2SopServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
