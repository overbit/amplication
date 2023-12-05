import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagInstanceServiceBase } from "./base/tagInstance.service.base";

@Injectable()
export class TagInstanceService extends TagInstanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
