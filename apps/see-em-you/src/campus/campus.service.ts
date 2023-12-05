import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CampusServiceBase } from "./base/campus.service.base";

@Injectable()
export class CampusService extends CampusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
