import { Module } from "@nestjs/common";
import { MitsSlateEmployModuleBase } from "./base/mitsSlateEmploy.module.base";
import { MitsSlateEmployService } from "./mitsSlateEmploy.service";
import { MitsSlateEmployController } from "./mitsSlateEmploy.controller";
import { MitsSlateEmployResolver } from "./mitsSlateEmploy.resolver";

@Module({
  imports: [MitsSlateEmployModuleBase],
  controllers: [MitsSlateEmployController],
  providers: [MitsSlateEmployService, MitsSlateEmployResolver],
  exports: [MitsSlateEmployService],
})
export class MitsSlateEmployModule {}
