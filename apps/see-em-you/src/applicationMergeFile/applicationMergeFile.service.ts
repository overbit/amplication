import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationMergeFileServiceBase } from "./base/applicationMergeFile.service.base";

@Injectable()
export class ApplicationMergeFileService extends ApplicationMergeFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
