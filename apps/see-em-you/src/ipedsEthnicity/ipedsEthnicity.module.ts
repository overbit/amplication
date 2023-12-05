import { Module } from "@nestjs/common";
import { IpedsEthnicityModuleBase } from "./base/ipedsEthnicity.module.base";
import { IpedsEthnicityService } from "./ipedsEthnicity.service";
import { IpedsEthnicityController } from "./ipedsEthnicity.controller";
import { IpedsEthnicityResolver } from "./ipedsEthnicity.resolver";

@Module({
  imports: [IpedsEthnicityModuleBase],
  controllers: [IpedsEthnicityController],
  providers: [IpedsEthnicityService, IpedsEthnicityResolver],
  exports: [IpedsEthnicityService],
})
export class IpedsEthnicityModule {}
