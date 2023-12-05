import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuDomainDepartmentServiceBase } from "./base/luDomainDepartment.service.base";

@Injectable()
export class LuDomainDepartmentService extends LuDomainDepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
