import { Module } from "@nestjs/common";
import { ScsUserWebisoModuleBase } from "./base/scsUserWebiso.module.base";
import { ScsUserWebisoService } from "./scsUserWebiso.service";
import { ScsUserWebisoController } from "./scsUserWebiso.controller";
import { ScsUserWebisoResolver } from "./scsUserWebiso.resolver";

@Module({
  imports: [ScsUserWebisoModuleBase],
  controllers: [ScsUserWebisoController],
  providers: [ScsUserWebisoService, ScsUserWebisoResolver],
  exports: [ScsUserWebisoService],
})
export class ScsUserWebisoModule {}
