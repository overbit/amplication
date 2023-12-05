import * as graphql from "@nestjs/graphql";
import { RecyclableSelectionResolverBase } from "./base/recyclableSelection.resolver.base";
import { RecyclableSelection } from "./base/RecyclableSelection";
import { RecyclableSelectionService } from "./recyclableSelection.service";

@graphql.Resolver(() => RecyclableSelection)
export class RecyclableSelectionResolver extends RecyclableSelectionResolverBase {
  constructor(protected readonly service: RecyclableSelectionService) {
    super(service);
  }
}
