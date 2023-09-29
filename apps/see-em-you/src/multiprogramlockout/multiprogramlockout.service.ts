import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MultiprogramlockoutServiceBase } from "./base/multiprogramlockout.service.base";

@Injectable()
export class MultiprogramlockoutService extends MultiprogramlockoutServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
