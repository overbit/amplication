import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InterestServiceBase } from "./base/interest.service.base";

@Injectable()
export class InterestService extends InterestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
