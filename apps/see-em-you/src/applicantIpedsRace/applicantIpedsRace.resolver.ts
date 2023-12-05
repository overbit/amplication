import * as graphql from "@nestjs/graphql";
import { ApplicantIpedsRaceResolverBase } from "./base/applicantIpedsRace.resolver.base";
import { ApplicantIpedsRace } from "./base/ApplicantIpedsRace";
import { ApplicantIpedsRaceService } from "./applicantIpedsRace.service";

@graphql.Resolver(() => ApplicantIpedsRace)
export class ApplicantIpedsRaceResolver extends ApplicantIpedsRaceResolverBase {
  constructor(protected readonly service: ApplicantIpedsRaceService) {
    super(service);
  }
}
