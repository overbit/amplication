import * as graphql from "@nestjs/graphql";
import { FolderLabelInfoResolverBase } from "./base/folderLabelInfo.resolver.base";
import { FolderLabelInfo } from "./base/FolderLabelInfo";
import { FolderLabelInfoService } from "./folderLabelInfo.service";

@graphql.Resolver(() => FolderLabelInfo)
export class FolderLabelInfoResolver extends FolderLabelInfoResolverBase {
  constructor(protected readonly service: FolderLabelInfoService) {
    super(service);
  }
}
