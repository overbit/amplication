import * as graphql from "@nestjs/graphql";
import { ApplicationAdminNoteResolverBase } from "./base/applicationAdminNote.resolver.base";
import { ApplicationAdminNote } from "./base/ApplicationAdminNote";
import { ApplicationAdminNoteService } from "./applicationAdminNote.service";

@graphql.Resolver(() => ApplicationAdminNote)
export class ApplicationAdminNoteResolver extends ApplicationAdminNoteResolverBase {
  constructor(protected readonly service: ApplicationAdminNoteService) {
    super(service);
  }
}
