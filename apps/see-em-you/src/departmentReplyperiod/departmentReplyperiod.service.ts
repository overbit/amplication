import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DepartmentReplyperiodServiceBase } from "./base/departmentReplyperiod.service.base";

@Injectable()
export class DepartmentReplyperiodService extends DepartmentReplyperiodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
