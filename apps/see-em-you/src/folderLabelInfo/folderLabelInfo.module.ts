import { Module } from "@nestjs/common";
import { FolderLabelInfoModuleBase } from "./base/folderLabelInfo.module.base";
import { FolderLabelInfoService } from "./folderLabelInfo.service";
import { FolderLabelInfoController } from "./folderLabelInfo.controller";
import { FolderLabelInfoResolver } from "./folderLabelInfo.resolver";

@Module({
  imports: [FolderLabelInfoModuleBase],
  controllers: [FolderLabelInfoController],
  providers: [FolderLabelInfoService, FolderLabelInfoResolver],
  exports: [FolderLabelInfoService],
})
export class FolderLabelInfoModule {}
