import * as graphql from "@nestjs/graphql";
import { IniDisciplinaryActionResolverBase } from "./base/iniDisciplinaryAction.resolver.base";
import { IniDisciplinaryAction } from "./base/IniDisciplinaryAction";
import { IniDisciplinaryActionService } from "./iniDisciplinaryAction.service";

@graphql.Resolver(() => IniDisciplinaryAction)
export class IniDisciplinaryActionResolver extends IniDisciplinaryActionResolverBase {
  constructor(protected readonly service: IniDisciplinaryActionService) {
    super(service);
  }
}
