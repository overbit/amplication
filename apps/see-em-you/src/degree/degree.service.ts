import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DegreeServiceBase } from "./base/degree.service.base";

@Injectable()
export class DegreeService extends DegreeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
