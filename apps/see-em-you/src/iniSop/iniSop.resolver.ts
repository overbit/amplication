import * as graphql from "@nestjs/graphql";
import { IniSopResolverBase } from "./base/iniSop.resolver.base";
import { IniSop } from "./base/IniSop";
import { IniSopService } from "./iniSop.service";

@graphql.Resolver(() => IniSop)
export class IniSopResolver extends IniSopResolverBase {
  constructor(protected readonly service: IniSopService) {
    super(service);
  }
}
