import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuProgramsDepartmentServiceBase } from "./base/luProgramsDepartment.service.base";

@Injectable()
export class LuProgramsDepartmentService extends LuProgramsDepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
