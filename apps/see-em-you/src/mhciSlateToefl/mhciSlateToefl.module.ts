import { Module } from "@nestjs/common";
import { MhciSlateToeflModuleBase } from "./base/mhciSlateToefl.module.base";
import { MhciSlateToeflService } from "./mhciSlateToefl.service";
import { MhciSlateToeflController } from "./mhciSlateToefl.controller";
import { MhciSlateToeflResolver } from "./mhciSlateToefl.resolver";

@Module({
  imports: [MhciSlateToeflModuleBase],
  controllers: [MhciSlateToeflController],
  providers: [MhciSlateToeflService, MhciSlateToeflResolver],
  exports: [MhciSlateToeflService],
})
export class MhciSlateToeflModule {}
