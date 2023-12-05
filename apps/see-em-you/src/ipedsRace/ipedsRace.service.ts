import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IpedsRaceServiceBase } from "./base/ipedsRace.service.base";

@Injectable()
export class IpedsRaceService extends IpedsRaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
