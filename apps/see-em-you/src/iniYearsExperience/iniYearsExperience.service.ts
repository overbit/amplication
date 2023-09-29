import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IniYearsExperienceServiceBase } from "./base/iniYearsExperience.service.base";

@Injectable()
export class IniYearsExperienceService extends IniYearsExperienceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
