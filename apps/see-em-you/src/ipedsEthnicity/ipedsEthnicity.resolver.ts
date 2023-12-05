import * as graphql from "@nestjs/graphql";
import { IpedsEthnicityResolverBase } from "./base/ipedsEthnicity.resolver.base";
import { IpedsEthnicity } from "./base/IpedsEthnicity";
import { IpedsEthnicityService } from "./ipedsEthnicity.service";

@graphql.Resolver(() => IpedsEthnicity)
export class IpedsEthnicityResolver extends IpedsEthnicityResolverBase {
  constructor(protected readonly service: IpedsEthnicityService) {
    super(service);
  }
}
