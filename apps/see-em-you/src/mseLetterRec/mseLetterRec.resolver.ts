import * as graphql from "@nestjs/graphql";
import { MseLetterRecResolverBase } from "./base/mseLetterRec.resolver.base";
import { MseLetterRec } from "./base/MseLetterRec";
import { MseLetterRecService } from "./mseLetterRec.service";

@graphql.Resolver(() => MseLetterRec)
export class MseLetterRecResolver extends MseLetterRecResolverBase {
  constructor(protected readonly service: MseLetterRecService) {
    super(service);
  }
}
