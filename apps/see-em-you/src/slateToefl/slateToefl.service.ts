import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateToeflServiceBase } from "./base/slateToefl.service.base";

@Injectable()
export class SlateToeflService extends SlateToeflServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
