import * as graphql from "@nestjs/graphql";
import { ApplicationProgramLetterResolverBase } from "./base/applicationProgramLetter.resolver.base";
import { ApplicationProgramLetter } from "./base/ApplicationProgramLetter";
import { ApplicationProgramLetterService } from "./applicationProgramLetter.service";

@graphql.Resolver(() => ApplicationProgramLetter)
export class ApplicationProgramLetterResolver extends ApplicationProgramLetterResolverBase {
  constructor(protected readonly service: ApplicationProgramLetterService) {
    super(service);
  }
}
