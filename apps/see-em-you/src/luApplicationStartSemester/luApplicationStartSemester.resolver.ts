import * as graphql from "@nestjs/graphql";
import { LuApplicationStartSemesterResolverBase } from "./base/luApplicationStartSemester.resolver.base";
import { LuApplicationStartSemester } from "./base/LuApplicationStartSemester";
import { LuApplicationStartSemesterService } from "./luApplicationStartSemester.service";

@graphql.Resolver(() => LuApplicationStartSemester)
export class LuApplicationStartSemesterResolver extends LuApplicationStartSemesterResolverBase {
  constructor(protected readonly service: LuApplicationStartSemesterService) {
    super(service);
  }
}
