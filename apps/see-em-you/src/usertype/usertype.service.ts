import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsertypeServiceBase } from "./base/usertype.service.base";

@Injectable()
export class UsertypeService extends UsertypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
