import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SelfGenderServiceBase } from "./base/selfGender.service.base";

@Injectable()
export class SelfGenderService extends SelfGenderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
