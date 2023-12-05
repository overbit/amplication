import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MhciSlateAppSchoolServiceBase } from "./base/mhciSlateAppSchool.service.base";

@Injectable()
export class MhciSlateAppSchoolService extends MhciSlateAppSchoolServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
