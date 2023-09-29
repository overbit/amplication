import { Module } from "@nestjs/common";
import { ApplicationProgramLetterModuleBase } from "./base/applicationProgramLetter.module.base";
import { ApplicationProgramLetterService } from "./applicationProgramLetter.service";
import { ApplicationProgramLetterController } from "./applicationProgramLetter.controller";
import { ApplicationProgramLetterResolver } from "./applicationProgramLetter.resolver";

@Module({
  imports: [ApplicationProgramLetterModuleBase],
  controllers: [ApplicationProgramLetterController],
  providers: [
    ApplicationProgramLetterService,
    ApplicationProgramLetterResolver,
  ],
  exports: [ApplicationProgramLetterService],
})
export class ApplicationProgramLetterModule {}
