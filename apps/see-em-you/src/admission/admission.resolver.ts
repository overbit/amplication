import * as graphql from "@nestjs/graphql";
import { AdmissionResolverBase } from "./base/admission.resolver.base";
import { Admission } from "./base/Admission";
import { AdmissionService } from "./admission.service";

@graphql.Resolver(() => Admission)
export class AdmissionResolver extends AdmissionResolverBase {
  constructor(protected readonly service: AdmissionService) {
    super(service);
  }
}
