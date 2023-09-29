import { Module } from "@nestjs/common";
import { ContentBakModuleBase } from "./base/contentBak.module.base";
import { ContentBakService } from "./contentBak.service";
import { ContentBakController } from "./contentBak.controller";
import { ContentBakResolver } from "./contentBak.resolver";

@Module({
  imports: [ContentBakModuleBase],
  controllers: [ContentBakController],
  providers: [ContentBakService, ContentBakResolver],
  exports: [ContentBakService],
})
export class ContentBakModule {}
