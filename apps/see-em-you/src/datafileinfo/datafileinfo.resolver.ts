import * as graphql from "@nestjs/graphql";
import { DatafileinfoResolverBase } from "./base/datafileinfo.resolver.base";
import { Datafileinfo } from "./base/Datafileinfo";
import { DatafileinfoService } from "./datafileinfo.service";

@graphql.Resolver(() => Datafileinfo)
export class DatafileinfoResolver extends DatafileinfoResolverBase {
  constructor(protected readonly service: DatafileinfoService) {
    super(service);
  }
}
