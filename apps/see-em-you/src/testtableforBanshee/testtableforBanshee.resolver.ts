import * as graphql from "@nestjs/graphql";
import { TesttableforBansheeResolverBase } from "./base/testtableforBanshee.resolver.base";
import { TesttableforBanshee } from "./base/TesttableforBanshee";
import { TesttableforBansheeService } from "./testtableforBanshee.service";

@graphql.Resolver(() => TesttableforBanshee)
export class TesttableforBansheeResolver extends TesttableforBansheeResolverBase {
  constructor(protected readonly service: TesttableforBansheeService) {
    super(service);
  }
}
