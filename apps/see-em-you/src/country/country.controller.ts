import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CountryService } from "./country.service";
import { CountryControllerBase } from "./base/country.controller.base";

@swagger.ApiTags("countries")
@common.Controller("countries")
export class CountryController extends CountryControllerBase {
  constructor(protected readonly service: CountryService) {
    super(service);
  }
}
