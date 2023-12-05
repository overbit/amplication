import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuApplicationInterestServiceBase } from "./base/luApplicationInterest.service.base";

@Injectable()
export class LuApplicationInterestService extends LuApplicationInterestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
