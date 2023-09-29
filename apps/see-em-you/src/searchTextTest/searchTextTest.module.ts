import { Module } from "@nestjs/common";
import { SearchTextTestModuleBase } from "./base/searchTextTest.module.base";
import { SearchTextTestService } from "./searchTextTest.service";
import { SearchTextTestController } from "./searchTextTest.controller";
import { SearchTextTestResolver } from "./searchTextTest.resolver";

@Module({
  imports: [SearchTextTestModuleBase],
  controllers: [SearchTextTestController],
  providers: [SearchTextTestService, SearchTextTestResolver],
  exports: [SearchTextTestService],
})
export class SearchTextTestModule {}
