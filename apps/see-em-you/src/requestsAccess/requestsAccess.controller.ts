import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RequestsAccessService } from "./requestsAccess.service";
import { RequestsAccessControllerBase } from "./base/requestsAccess.controller.base";

@swagger.ApiTags("requestsAccesses")
@common.Controller("requestsAccesses")
export class RequestsAccessController extends RequestsAccessControllerBase {
  constructor(protected readonly service: RequestsAccessService) {
    super(service);
  }
}
