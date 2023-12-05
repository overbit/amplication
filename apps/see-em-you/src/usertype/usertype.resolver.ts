import * as graphql from "@nestjs/graphql";
import { UsertypeResolverBase } from "./base/usertype.resolver.base";
import { Usertype } from "./base/Usertype";
import { UsertypeService } from "./usertype.service";

@graphql.Resolver(() => Usertype)
export class UsertypeResolver extends UsertypeResolverBase {
  constructor(protected readonly service: UsertypeService) {
    super(service);
  }
}
