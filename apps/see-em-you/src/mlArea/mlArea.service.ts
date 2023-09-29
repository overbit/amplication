import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MlAreaServiceBase } from "./base/mlArea.service.base";

@Injectable()
export class MlAreaService extends MlAreaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
