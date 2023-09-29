import * as graphql from "@nestjs/graphql";
import { IpedsRaceResolverBase } from "./base/ipedsRace.resolver.base";
import { IpedsRace } from "./base/IpedsRace";
import { IpedsRaceService } from "./ipedsRace.service";

@graphql.Resolver(() => IpedsRace)
export class IpedsRaceResolver extends IpedsRaceResolverBase {
  constructor(protected readonly service: IpedsRaceService) {
    super(service);
  }
}
