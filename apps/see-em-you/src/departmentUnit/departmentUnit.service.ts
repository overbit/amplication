import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DepartmentUnitServiceBase } from "./base/departmentUnit.service.base";

@Injectable()
export class DepartmentUnitService extends DepartmentUnitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
