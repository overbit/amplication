import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MitsSlateAppSchoolServiceBase } from "./base/mitsSlateAppSchool.service.base";

@Injectable()
export class MitsSlateAppSchoolService extends MitsSlateAppSchoolServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
