import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CcAuthNotificationServiceBase } from "./base/ccAuthNotification.service.base";

@Injectable()
export class CcAuthNotificationService extends CcAuthNotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
