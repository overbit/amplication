import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeachingExperienceServiceBase } from "./base/teachingExperience.service.base";

@Injectable()
export class TeachingExperienceService extends TeachingExperienceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
