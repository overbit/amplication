import { Module } from "@nestjs/common";
import { MhciSlatePubModuleBase } from "./base/mhciSlatePub.module.base";
import { MhciSlatePubService } from "./mhciSlatePub.service";
import { MhciSlatePubController } from "./mhciSlatePub.controller";
import { MhciSlatePubResolver } from "./mhciSlatePub.resolver";

@Module({
  imports: [MhciSlatePubModuleBase],
  controllers: [MhciSlatePubController],
  providers: [MhciSlatePubService, MhciSlatePubResolver],
  exports: [MhciSlatePubService],
})
export class MhciSlatePubModule {}
