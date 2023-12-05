import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationAdminNoteServiceBase } from "./base/applicationAdminNote.service.base";

@Injectable()
export class ApplicationAdminNoteService extends ApplicationAdminNoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
