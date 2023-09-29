import { Module } from "@nestjs/common";
import { ReviewIniAlternativeProgramModuleBase } from "./base/reviewIniAlternativeProgram.module.base";
import { ReviewIniAlternativeProgramService } from "./reviewIniAlternativeProgram.service";
import { ReviewIniAlternativeProgramController } from "./reviewIniAlternativeProgram.controller";
import { ReviewIniAlternativeProgramResolver } from "./reviewIniAlternativeProgram.resolver";

@Module({
  imports: [ReviewIniAlternativeProgramModuleBase],
  controllers: [ReviewIniAlternativeProgramController],
  providers: [
    ReviewIniAlternativeProgramService,
    ReviewIniAlternativeProgramResolver,
  ],
  exports: [ReviewIniAlternativeProgramService],
})
export class ReviewIniAlternativeProgramModule {}
