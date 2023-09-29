import { Module } from "@nestjs/common";
import { MlAreaModuleBase } from "./base/mlArea.module.base";
import { MlAreaService } from "./mlArea.service";
import { MlAreaController } from "./mlArea.controller";
import { MlAreaResolver } from "./mlArea.resolver";

@Module({
  imports: [MlAreaModuleBase],
  controllers: [MlAreaController],
  providers: [MlAreaService, MlAreaResolver],
  exports: [MlAreaService],
})
export class MlAreaModule {}
