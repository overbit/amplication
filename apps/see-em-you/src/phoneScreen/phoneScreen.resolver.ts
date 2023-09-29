import * as graphql from "@nestjs/graphql";
import { PhoneScreenResolverBase } from "./base/phoneScreen.resolver.base";
import { PhoneScreen } from "./base/PhoneScreen";
import { PhoneScreenService } from "./phoneScreen.service";

@graphql.Resolver(() => PhoneScreen)
export class PhoneScreenResolver extends PhoneScreenResolverBase {
  constructor(protected readonly service: PhoneScreenService) {
    super(service);
  }
}
