import * as graphql from "@nestjs/graphql";
import { CcAuthNotificationResolverBase } from "./base/ccAuthNotification.resolver.base";
import { CcAuthNotification } from "./base/CcAuthNotification";
import { CcAuthNotificationService } from "./ccAuthNotification.service";

@graphql.Resolver(() => CcAuthNotification)
export class CcAuthNotificationResolver extends CcAuthNotificationResolverBase {
  constructor(protected readonly service: CcAuthNotificationService) {
    super(service);
  }
}
