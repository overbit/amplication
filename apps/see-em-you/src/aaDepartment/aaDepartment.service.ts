import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AaDepartmentServiceBase } from "./base/aaDepartment.service.base";

@Injectable()
export class AaDepartmentService extends AaDepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
