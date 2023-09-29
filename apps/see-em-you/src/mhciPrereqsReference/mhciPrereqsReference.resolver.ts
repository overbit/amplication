import * as graphql from "@nestjs/graphql";
import { MhciPrereqsReferenceResolverBase } from "./base/mhciPrereqsReference.resolver.base";
import { MhciPrereqsReference } from "./base/MhciPrereqsReference";
import { MhciPrereqsReferenceService } from "./mhciPrereqsReference.service";

@graphql.Resolver(() => MhciPrereqsReference)
export class MhciPrereqsReferenceResolver extends MhciPrereqsReferenceResolverBase {
  constructor(protected readonly service: MhciPrereqsReferenceService) {
    super(service);
  }
}
