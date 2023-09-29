import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateOrgsAllServiceBase } from "./base/slateOrgsAll.service.base";

@Injectable()
export class SlateOrgsAllService extends SlateOrgsAllServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
