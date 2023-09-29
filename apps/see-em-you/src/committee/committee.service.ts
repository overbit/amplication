import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommitteeServiceBase } from "./base/committee.service.base";

@Injectable()
export class CommitteeService extends CommitteeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
