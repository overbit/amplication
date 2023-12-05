import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SchoolServiceBase } from "./base/school.service.base";

@Injectable()
export class SchoolService extends SchoolServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
