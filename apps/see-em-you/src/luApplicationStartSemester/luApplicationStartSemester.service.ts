import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuApplicationStartSemesterServiceBase } from "./base/luApplicationStartSemester.service.base";

@Injectable()
export class LuApplicationStartSemesterService extends LuApplicationStartSemesterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
