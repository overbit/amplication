import * as graphql from "@nestjs/graphql";
import { IniSupportingCourseworkResolverBase } from "./base/iniSupportingCoursework.resolver.base";
import { IniSupportingCoursework } from "./base/IniSupportingCoursework";
import { IniSupportingCourseworkService } from "./iniSupportingCoursework.service";

@graphql.Resolver(() => IniSupportingCoursework)
export class IniSupportingCourseworkResolver extends IniSupportingCourseworkResolverBase {
  constructor(protected readonly service: IniSupportingCourseworkService) {
    super(service);
  }
}
