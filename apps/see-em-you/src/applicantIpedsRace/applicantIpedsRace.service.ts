import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicantIpedsRaceServiceBase } from "./base/applicantIpedsRace.service.base";

@Injectable()
export class ApplicantIpedsRaceService extends ApplicantIpedsRaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
