import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GenderServiceBase } from "./base/gender.service.base";

@Injectable()
export class GenderService extends GenderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
