import { Module } from "@nestjs/common";
import { ApplicationMergeFileModuleBase } from "./base/applicationMergeFile.module.base";
import { ApplicationMergeFileService } from "./applicationMergeFile.service";
import { ApplicationMergeFileController } from "./applicationMergeFile.controller";
import { ApplicationMergeFileResolver } from "./applicationMergeFile.resolver";

@Module({
  imports: [ApplicationMergeFileModuleBase],
  controllers: [ApplicationMergeFileController],
  providers: [ApplicationMergeFileService, ApplicationMergeFileResolver],
  exports: [ApplicationMergeFileService],
})
export class ApplicationMergeFileModule {}
