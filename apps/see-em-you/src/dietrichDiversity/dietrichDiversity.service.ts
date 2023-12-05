import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DietrichDiversityServiceBase } from "./base/dietrichDiversity.service.base";

@Injectable()
export class DietrichDiversityService extends DietrichDiversityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
