import * as graphql from "@nestjs/graphql";
import { VisatypeResolverBase } from "./base/visatype.resolver.base";
import { Visatype } from "./base/Visatype";
import { VisatypeService } from "./visatype.service";

@graphql.Resolver(() => Visatype)
export class VisatypeResolver extends VisatypeResolverBase {
  constructor(protected readonly service: VisatypeService) {
    super(service);
  }
}
