import * as graphql from "@nestjs/graphql";
import { GrescoreMscsWaiverResolverBase } from "./base/grescoreMscsWaiver.resolver.base";
import { GrescoreMscsWaiver } from "./base/GrescoreMscsWaiver";
import { GrescoreMscsWaiverService } from "./grescoreMscsWaiver.service";

@graphql.Resolver(() => GrescoreMscsWaiver)
export class GrescoreMscsWaiverResolver extends GrescoreMscsWaiverResolverBase {
  constructor(protected readonly service: GrescoreMscsWaiverService) {
    super(service);
  }
}
