import { Module } from "@nestjs/common";
import { ContenttypeModuleBase } from "./base/contenttype.module.base";
import { ContenttypeService } from "./contenttype.service";
import { ContenttypeController } from "./contenttype.controller";
import { ContenttypeResolver } from "./contenttype.resolver";

@Module({
  imports: [ContenttypeModuleBase],
  controllers: [ContenttypeController],
  providers: [ContenttypeService, ContenttypeResolver],
  exports: [ContenttypeService],
})
export class ContenttypeModule {}
