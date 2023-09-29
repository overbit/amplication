import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VisatypeServiceBase } from "./base/visatype.service.base";

@Injectable()
export class VisatypeService extends VisatypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
