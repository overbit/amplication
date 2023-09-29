import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuUserDepartmentServiceBase } from "./base/luUserDepartment.service.base";

@Injectable()
export class LuUserDepartmentService extends LuUserDepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
