import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateAppSchoolServiceBase } from "./base/slateAppSchool.service.base";

@Injectable()
export class SlateAppSchoolService extends SlateAppSchoolServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
