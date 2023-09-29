import { Module } from "@nestjs/common";
import { TeachingExperienceModuleBase } from "./base/teachingExperience.module.base";
import { TeachingExperienceService } from "./teachingExperience.service";
import { TeachingExperienceController } from "./teachingExperience.controller";
import { TeachingExperienceResolver } from "./teachingExperience.resolver";

@Module({
  imports: [TeachingExperienceModuleBase],
  controllers: [TeachingExperienceController],
  providers: [TeachingExperienceService, TeachingExperienceResolver],
  exports: [TeachingExperienceService],
})
export class TeachingExperienceModule {}
