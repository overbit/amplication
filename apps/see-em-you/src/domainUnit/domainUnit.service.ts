import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DomainUnitServiceBase } from "./base/domainUnit.service.base";

@Injectable()
export class DomainUnitService extends DomainUnitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
