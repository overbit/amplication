import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdmissionLetterServiceBase } from "./base/admissionLetter.service.base";

@Injectable()
export class AdmissionLetterService extends AdmissionLetterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
