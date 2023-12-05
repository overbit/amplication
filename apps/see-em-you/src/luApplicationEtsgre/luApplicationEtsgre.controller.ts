import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LuApplicationEtsgreService } from "./luApplicationEtsgre.service";
import { LuApplicationEtsgreControllerBase } from "./base/luApplicationEtsgre.controller.base";

@swagger.ApiTags("luApplicationEtsgres")
@common.Controller("luApplicationEtsgres")
export class LuApplicationEtsgreController extends LuApplicationEtsgreControllerBase {
  constructor(protected readonly service: LuApplicationEtsgreService) {
    super(service);
  }
}
