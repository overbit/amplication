import * as graphql from "@nestjs/graphql";
import { SlateAppSchoolResolverBase } from "./base/slateAppSchool.resolver.base";
import { SlateAppSchool } from "./base/SlateAppSchool";
import { SlateAppSchoolService } from "./slateAppSchool.service";

@graphql.Resolver(() => SlateAppSchool)
export class SlateAppSchoolResolver extends SlateAppSchoolResolverBase {
  constructor(protected readonly service: SlateAppSchoolService) {
    super(service);
  }
}
