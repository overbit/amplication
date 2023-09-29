import { Module } from "@nestjs/common";
import { AdmissionLetterModuleBase } from "./base/admissionLetter.module.base";
import { AdmissionLetterService } from "./admissionLetter.service";
import { AdmissionLetterController } from "./admissionLetter.controller";
import { AdmissionLetterResolver } from "./admissionLetter.resolver";

@Module({
  imports: [AdmissionLetterModuleBase],
  controllers: [AdmissionLetterController],
  providers: [AdmissionLetterService, AdmissionLetterResolver],
  exports: [AdmissionLetterService],
})
export class AdmissionLetterModule {}
