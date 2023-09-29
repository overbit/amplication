import * as graphql from "@nestjs/graphql";
import { ApplicationMergeFileResolverBase } from "./base/applicationMergeFile.resolver.base";
import { ApplicationMergeFile } from "./base/ApplicationMergeFile";
import { ApplicationMergeFileService } from "./applicationMergeFile.service";

@graphql.Resolver(() => ApplicationMergeFile)
export class ApplicationMergeFileResolver extends ApplicationMergeFileResolverBase {
  constructor(protected readonly service: ApplicationMergeFileService) {
    super(service);
  }
}
