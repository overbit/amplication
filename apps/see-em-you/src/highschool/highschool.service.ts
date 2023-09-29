import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HighschoolServiceBase } from "./base/highschool.service.base";

@Injectable()
export class HighschoolService extends HighschoolServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
