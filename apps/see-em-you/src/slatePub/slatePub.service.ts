import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlatePubServiceBase } from "./base/slatePub.service.base";

@Injectable()
export class SlatePubService extends SlatePubServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
