import * as graphql from "@nestjs/graphql";
import { EtsGreCopyResolverBase } from "./base/etsGreCopy.resolver.base";
import { EtsGreCopy } from "./base/EtsGreCopy";
import { EtsGreCopyService } from "./etsGreCopy.service";

@graphql.Resolver(() => EtsGreCopy)
export class EtsGreCopyResolver extends EtsGreCopyResolverBase {
  constructor(protected readonly service: EtsGreCopyService) {
    super(service);
  }
}
