import { Module } from "@nestjs/common";
import { MitsSlateGreModuleBase } from "./base/mitsSlateGre.module.base";
import { MitsSlateGreService } from "./mitsSlateGre.service";
import { MitsSlateGreController } from "./mitsSlateGre.controller";
import { MitsSlateGreResolver } from "./mitsSlateGre.resolver";

@Module({
  imports: [MitsSlateGreModuleBase],
  controllers: [MitsSlateGreController],
  providers: [MitsSlateGreService, MitsSlateGreResolver],
  exports: [MitsSlateGreService],
})
export class MitsSlateGreModule {}
