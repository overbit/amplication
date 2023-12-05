import { Module } from "@nestjs/common";
import { ToeflEssentialModuleBase } from "./base/toeflEssential.module.base";
import { ToeflEssentialService } from "./toeflEssential.service";
import { ToeflEssentialController } from "./toeflEssential.controller";
import { ToeflEssentialResolver } from "./toeflEssential.resolver";

@Module({
  imports: [ToeflEssentialModuleBase],
  controllers: [ToeflEssentialController],
  providers: [ToeflEssentialService, ToeflEssentialResolver],
  exports: [ToeflEssentialService],
})
export class ToeflEssentialModule {}
