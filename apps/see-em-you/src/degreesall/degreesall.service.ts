import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DegreesallServiceBase } from "./base/degreesall.service.base";

@Injectable()
export class DegreesallService extends DegreesallServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
