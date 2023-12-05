import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ToeflServiceBase } from "./base/toefl.service.base";

@Injectable()
export class ToeflService extends ToeflServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
