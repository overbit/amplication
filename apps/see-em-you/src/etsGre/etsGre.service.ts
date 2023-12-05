import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EtsGreServiceBase } from "./base/etsGre.service.base";

@Injectable()
export class EtsGreService extends EtsGreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
