import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MhciSlateToeflServiceBase } from "./base/mhciSlateToefl.service.base";

@Injectable()
export class MhciSlateToeflService extends MhciSlateToeflServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
