import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ToeflEssentialServiceBase } from "./base/toeflEssential.service.base";

@Injectable()
export class ToeflEssentialService extends ToeflEssentialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
