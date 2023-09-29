import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PeriodUmbrellaServiceBase } from "./base/periodUmbrella.service.base";

@Injectable()
export class PeriodUmbrellaService extends PeriodUmbrellaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
