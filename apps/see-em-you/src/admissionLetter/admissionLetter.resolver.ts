import * as graphql from "@nestjs/graphql";
import { AdmissionLetterResolverBase } from "./base/admissionLetter.resolver.base";
import { AdmissionLetter } from "./base/AdmissionLetter";
import { AdmissionLetterService } from "./admissionLetter.service";

@graphql.Resolver(() => AdmissionLetter)
export class AdmissionLetterResolver extends AdmissionLetterResolverBase {
  constructor(protected readonly service: AdmissionLetterService) {
    super(service);
  }
}
