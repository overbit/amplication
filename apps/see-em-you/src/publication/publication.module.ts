import { Module } from "@nestjs/common";
import { PublicationModuleBase } from "./base/publication.module.base";
import { PublicationService } from "./publication.service";
import { PublicationController } from "./publication.controller";
import { PublicationResolver } from "./publication.resolver";

@Module({
  imports: [PublicationModuleBase],
  controllers: [PublicationController],
  providers: [PublicationService, PublicationResolver],
  exports: [PublicationService],
})
export class PublicationModule {}
