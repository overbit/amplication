import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateMaterialServiceBase } from "./base/slateMaterial.service.base";

@Injectable()
export class SlateMaterialService extends SlateMaterialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
