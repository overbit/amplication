import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FolderLabelInfoServiceBase } from "./base/folderLabelInfo.service.base";

@Injectable()
export class FolderLabelInfoService extends FolderLabelInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
