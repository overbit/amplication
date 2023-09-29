import * as graphql from "@nestjs/graphql";
import { DietrichRecognitionResolverBase } from "./base/dietrichRecognition.resolver.base";
import { DietrichRecognition } from "./base/DietrichRecognition";
import { DietrichRecognitionService } from "./dietrichRecognition.service";

@graphql.Resolver(() => DietrichRecognition)
export class DietrichRecognitionResolver extends DietrichRecognitionResolverBase {
  constructor(protected readonly service: DietrichRecognitionService) {
    super(service);
  }
}
