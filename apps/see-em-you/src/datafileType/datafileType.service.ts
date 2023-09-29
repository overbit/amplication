import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DatafileTypeServiceBase } from "./base/datafileType.service.base";

@Injectable()
export class DatafileTypeService extends DatafileTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
