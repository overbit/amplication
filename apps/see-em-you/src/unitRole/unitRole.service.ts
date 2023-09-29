import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UnitRoleServiceBase } from "./base/unitRole.service.base";

@Injectable()
export class UnitRoleService extends UnitRoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
