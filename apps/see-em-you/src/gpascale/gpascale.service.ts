import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GpascaleServiceBase } from "./base/gpascale.service.base";

@Injectable()
export class GpascaleService extends GpascaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
