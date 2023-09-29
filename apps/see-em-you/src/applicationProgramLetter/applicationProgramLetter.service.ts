import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationProgramLetterServiceBase } from "./base/applicationProgramLetter.service.base";

@Injectable()
export class ApplicationProgramLetterService extends ApplicationProgramLetterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
