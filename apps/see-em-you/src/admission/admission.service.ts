import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdmissionServiceBase } from "./base/admission.service.base";

@Injectable()
export class AdmissionService extends AdmissionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
