import { Module } from "@nestjs/common";
import { RecommenderInfoModuleBase } from "./base/recommenderInfo.module.base";
import { RecommenderInfoService } from "./recommenderInfo.service";
import { RecommenderInfoController } from "./recommenderInfo.controller";
import { RecommenderInfoResolver } from "./recommenderInfo.resolver";

@Module({
  imports: [RecommenderInfoModuleBase],
  controllers: [RecommenderInfoController],
  providers: [RecommenderInfoService, RecommenderInfoResolver],
  exports: [RecommenderInfoService],
})
export class RecommenderInfoModule {}
