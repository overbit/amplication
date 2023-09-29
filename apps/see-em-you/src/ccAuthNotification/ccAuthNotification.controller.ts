import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CcAuthNotificationService } from "./ccAuthNotification.service";
import { CcAuthNotificationControllerBase } from "./base/ccAuthNotification.controller.base";

@swagger.ApiTags("ccAuthNotifications")
@common.Controller("ccAuthNotifications")
export class CcAuthNotificationController extends CcAuthNotificationControllerBase {
  constructor(protected readonly service: CcAuthNotificationService) {
    super(service);
  }
}
