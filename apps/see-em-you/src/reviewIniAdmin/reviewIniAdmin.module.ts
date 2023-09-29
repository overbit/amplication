import { Module } from "@nestjs/common";
import { ReviewIniAdminModuleBase } from "./base/reviewIniAdmin.module.base";
import { ReviewIniAdminService } from "./reviewIniAdmin.service";
import { ReviewIniAdminController } from "./reviewIniAdmin.controller";
import { ReviewIniAdminResolver } from "./reviewIniAdmin.resolver";

@Module({
  imports: [ReviewIniAdminModuleBase],
  controllers: [ReviewIniAdminController],
  providers: [ReviewIniAdminService, ReviewIniAdminResolver],
  exports: [ReviewIniAdminService],
})
export class ReviewIniAdminModule {}
