import * as graphql from "@nestjs/graphql";
import { CommitteeResolverBase } from "./base/committee.resolver.base";
import { Committee } from "./base/Committee";
import { CommitteeService } from "./committee.service";

@graphql.Resolver(() => Committee)
export class CommitteeResolver extends CommitteeResolverBase {
  constructor(protected readonly service: CommitteeService) {
    super(service);
  }
}
