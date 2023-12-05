import { Module } from "@nestjs/common";
import { MhciPrereqsReferenceModuleBase } from "./base/mhciPrereqsReference.module.base";
import { MhciPrereqsReferenceService } from "./mhciPrereqsReference.service";
import { MhciPrereqsReferenceController } from "./mhciPrereqsReference.controller";
import { MhciPrereqsReferenceResolver } from "./mhciPrereqsReference.resolver";

@Module({
  imports: [MhciPrereqsReferenceModuleBase],
  controllers: [MhciPrereqsReferenceController],
  providers: [MhciPrereqsReferenceService, MhciPrereqsReferenceResolver],
  exports: [MhciPrereqsReferenceService],
})
export class MhciPrereqsReferenceModule {}
