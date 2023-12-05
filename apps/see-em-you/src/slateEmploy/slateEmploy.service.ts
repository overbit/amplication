import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateEmployServiceBase } from "./base/slateEmploy.service.base";

@Injectable()
export class SlateEmployService extends SlateEmployServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
