import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProgramGroupRoleServiceBase } from "./base/programGroupRole.service.base";

@Injectable()
export class ProgramGroupRoleService extends ProgramGroupRoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
