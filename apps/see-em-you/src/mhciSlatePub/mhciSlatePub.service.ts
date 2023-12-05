import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MhciSlatePubServiceBase } from "./base/mhciSlatePub.service.base";

@Injectable()
export class MhciSlatePubService extends MhciSlatePubServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
