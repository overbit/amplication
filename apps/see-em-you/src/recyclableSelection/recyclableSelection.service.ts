import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecyclableSelectionServiceBase } from "./base/recyclableSelection.service.base";

@Injectable()
export class RecyclableSelectionService extends RecyclableSelectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
