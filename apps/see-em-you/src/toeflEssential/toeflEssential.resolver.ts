import * as graphql from "@nestjs/graphql";
import { ToeflEssentialResolverBase } from "./base/toeflEssential.resolver.base";
import { ToeflEssential } from "./base/ToeflEssential";
import { ToeflEssentialService } from "./toeflEssential.service";

@graphql.Resolver(() => ToeflEssential)
export class ToeflEssentialResolver extends ToeflEssentialResolverBase {
  constructor(protected readonly service: ToeflEssentialService) {
    super(service);
  }
}
