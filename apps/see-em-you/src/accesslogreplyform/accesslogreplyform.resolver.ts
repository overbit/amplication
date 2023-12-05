import * as graphql from "@nestjs/graphql";
import { AccesslogreplyformResolverBase } from "./base/accesslogreplyform.resolver.base";
import { Accesslogreplyform } from "./base/Accesslogreplyform";
import { AccesslogreplyformService } from "./accesslogreplyform.service";

@graphql.Resolver(() => Accesslogreplyform)
export class AccesslogreplyformResolver extends AccesslogreplyformResolverBase {
  constructor(protected readonly service: AccesslogreplyformService) {
    super(service);
  }
}
