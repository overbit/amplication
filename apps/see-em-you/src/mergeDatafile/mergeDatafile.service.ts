import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MergeDatafileServiceBase } from "./base/mergeDatafile.service.base";

@Injectable()
export class MergeDatafileService extends MergeDatafileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
