import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RegistrationFeePaymentService } from "./registrationFeePayment.service";
import { RegistrationFeePaymentControllerBase } from "./base/registrationFeePayment.controller.base";

@swagger.ApiTags("registrationFeePayments")
@common.Controller("registrationFeePayments")
export class RegistrationFeePaymentController extends RegistrationFeePaymentControllerBase {
  constructor(protected readonly service: RegistrationFeePaymentService) {
    super(service);
  }
}
