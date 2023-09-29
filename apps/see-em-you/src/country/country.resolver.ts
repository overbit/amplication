import * as graphql from "@nestjs/graphql";
import { CountryResolverBase } from "./base/country.resolver.base";
import { Country } from "./base/Country";
import { CountryService } from "./country.service";

@graphql.Resolver(() => Country)
export class CountryResolver extends CountryResolverBase {
  constructor(protected readonly service: CountryService) {
    super(service);
  }
}
