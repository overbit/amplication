import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MhciSlateGreServiceBase } from "./base/mhciSlateGre.service.base";

@Injectable()
export class MhciSlateGreService extends MhciSlateGreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
