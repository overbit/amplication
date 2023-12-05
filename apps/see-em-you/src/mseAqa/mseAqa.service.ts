import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MseAqaServiceBase } from "./base/mseAqa.service.base";

@Injectable()
export class MseAqaService extends MseAqaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
