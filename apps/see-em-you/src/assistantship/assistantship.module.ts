import { Module } from "@nestjs/common";
import { AssistantshipModuleBase } from "./base/assistantship.module.base";
import { AssistantshipService } from "./assistantship.service";
import { AssistantshipController } from "./assistantship.controller";
import { AssistantshipResolver } from "./assistantship.resolver";

@Module({
  imports: [AssistantshipModuleBase],
  controllers: [AssistantshipController],
  providers: [AssistantshipService, AssistantshipResolver],
  exports: [AssistantshipService],
})
export class AssistantshipModule {}
