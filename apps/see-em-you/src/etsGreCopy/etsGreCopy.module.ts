import { Module } from "@nestjs/common";
import { EtsGreCopyModuleBase } from "./base/etsGreCopy.module.base";
import { EtsGreCopyService } from "./etsGreCopy.service";
import { EtsGreCopyController } from "./etsGreCopy.controller";
import { EtsGreCopyResolver } from "./etsGreCopy.resolver";

@Module({
  imports: [EtsGreCopyModuleBase],
  controllers: [EtsGreCopyController],
  providers: [EtsGreCopyService, EtsGreCopyResolver],
  exports: [EtsGreCopyService],
})
export class EtsGreCopyModule {}
