import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApplicationAdminNoteService } from "./applicationAdminNote.service";
import { ApplicationAdminNoteControllerBase } from "./base/applicationAdminNote.controller.base";

@swagger.ApiTags("applicationAdminNotes")
@common.Controller("applicationAdminNotes")
export class ApplicationAdminNoteController extends ApplicationAdminNoteControllerBase {
  constructor(protected readonly service: ApplicationAdminNoteService) {
    super(service);
  }
}
