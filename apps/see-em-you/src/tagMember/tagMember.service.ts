import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagMemberServiceBase } from "./base/tagMember.service.base";

@Injectable()
export class TagMemberService extends TagMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
