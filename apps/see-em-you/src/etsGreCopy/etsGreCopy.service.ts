import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EtsGreCopyServiceBase } from "./base/etsGreCopy.service.base";

@Injectable()
export class EtsGreCopyService extends EtsGreCopyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
