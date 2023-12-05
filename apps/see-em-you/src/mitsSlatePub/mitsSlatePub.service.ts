import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MitsSlatePubServiceBase } from "./base/mitsSlatePub.service.base";

@Injectable()
export class MitsSlatePubService extends MitsSlatePubServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
