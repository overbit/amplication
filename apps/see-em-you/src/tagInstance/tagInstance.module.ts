import { Module } from "@nestjs/common";
import { TagInstanceModuleBase } from "./base/tagInstance.module.base";
import { TagInstanceService } from "./tagInstance.service";
import { TagInstanceController } from "./tagInstance.controller";
import { TagInstanceResolver } from "./tagInstance.resolver";

@Module({
  imports: [TagInstanceModuleBase],
  controllers: [TagInstanceController],
  providers: [TagInstanceService, TagInstanceResolver],
  exports: [TagInstanceService],
})
export class TagInstanceModule {}
