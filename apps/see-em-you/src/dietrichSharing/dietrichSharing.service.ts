import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DietrichSharingServiceBase } from "./base/dietrichSharing.service.base";

@Injectable()
export class DietrichSharingService extends DietrichSharingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
