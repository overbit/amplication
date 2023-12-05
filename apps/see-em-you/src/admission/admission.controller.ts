import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdmissionService } from "./admission.service";
import { AdmissionControllerBase } from "./base/admission.controller.base";

@swagger.ApiTags("admissions")
@common.Controller("admissions")
export class AdmissionController extends AdmissionControllerBase {
  constructor(protected readonly service: AdmissionService) {
    super(service);
  }
}
