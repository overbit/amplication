import * as graphql from "@nestjs/graphql";
import { FieldsofstudyResolverBase } from "./base/fieldsofstudy.resolver.base";
import { Fieldsofstudy } from "./base/Fieldsofstudy";
import { FieldsofstudyService } from "./fieldsofstudy.service";

@graphql.Resolver(() => Fieldsofstudy)
export class FieldsofstudyResolver extends FieldsofstudyResolverBase {
  constructor(protected readonly service: FieldsofstudyService) {
    super(service);
  }
}
