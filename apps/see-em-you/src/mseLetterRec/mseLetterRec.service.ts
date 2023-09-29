import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MseLetterRecServiceBase } from "./base/mseLetterRec.service.base";

@Injectable()
export class MseLetterRecService extends MseLetterRecServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
