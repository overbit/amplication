import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReclogServiceBase } from "./base/reclog.service.base";

@Injectable()
export class ReclogService extends ReclogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
