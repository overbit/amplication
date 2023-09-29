import * as graphql from "@nestjs/graphql";
import { DuolingoDataCopyResolverBase } from "./base/duolingoDataCopy.resolver.base";
import { DuolingoDataCopy } from "./base/DuolingoDataCopy";
import { DuolingoDataCopyService } from "./duolingoDataCopy.service";

@graphql.Resolver(() => DuolingoDataCopy)
export class DuolingoDataCopyResolver extends DuolingoDataCopyResolverBase {
  constructor(protected readonly service: DuolingoDataCopyService) {
    super(service);
  }
}
