import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PhoneScreenServiceBase } from "./base/phoneScreen.service.base";

@Injectable()
export class PhoneScreenService extends PhoneScreenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
