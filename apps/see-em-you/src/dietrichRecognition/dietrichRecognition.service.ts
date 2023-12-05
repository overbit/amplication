import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DietrichRecognitionServiceBase } from "./base/dietrichRecognition.service.base";

@Injectable()
export class DietrichRecognitionService extends DietrichRecognitionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
