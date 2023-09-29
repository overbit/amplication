import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateIeltServiceBase } from "./base/slateIelt.service.base";

@Injectable()
export class SlateIeltService extends SlateIeltServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
