import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MitsSlateToeflServiceBase } from "./base/mitsSlateToefl.service.base";

@Injectable()
export class MitsSlateToeflService extends MitsSlateToeflServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
