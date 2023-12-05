import * as graphql from "@nestjs/graphql";
import { IniSupportingCourseworkKobeResolverBase } from "./base/iniSupportingCourseworkKobe.resolver.base";
import { IniSupportingCourseworkKobe } from "./base/IniSupportingCourseworkKobe";
import { IniSupportingCourseworkKobeService } from "./iniSupportingCourseworkKobe.service";

@graphql.Resolver(() => IniSupportingCourseworkKobe)
export class IniSupportingCourseworkKobeResolver extends IniSupportingCourseworkKobeResolverBase {
  constructor(protected readonly service: IniSupportingCourseworkKobeService) {
    super(service);
  }
}
