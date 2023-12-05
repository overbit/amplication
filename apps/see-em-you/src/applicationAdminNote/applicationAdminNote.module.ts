import { Module } from "@nestjs/common";
import { ApplicationAdminNoteModuleBase } from "./base/applicationAdminNote.module.base";
import { ApplicationAdminNoteService } from "./applicationAdminNote.service";
import { ApplicationAdminNoteController } from "./applicationAdminNote.controller";
import { ApplicationAdminNoteResolver } from "./applicationAdminNote.resolver";

@Module({
  imports: [ApplicationAdminNoteModuleBase],
  controllers: [ApplicationAdminNoteController],
  providers: [ApplicationAdminNoteService, ApplicationAdminNoteResolver],
  exports: [ApplicationAdminNoteService],
})
export class ApplicationAdminNoteModule {}
