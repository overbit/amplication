import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BfDepartmentServiceBase } from "./base/bfDepartment.service.base";

@Injectable()
export class BfDepartmentService extends BfDepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
