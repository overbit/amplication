import { Module } from "@nestjs/common";
import { VisatypeModuleBase } from "./base/visatype.module.base";
import { VisatypeService } from "./visatype.service";
import { VisatypeController } from "./visatype.controller";
import { VisatypeResolver } from "./visatype.resolver";

@Module({
  imports: [VisatypeModuleBase],
  controllers: [VisatypeController],
  providers: [VisatypeService, VisatypeResolver],
  exports: [VisatypeService],
})
export class VisatypeModule {}
