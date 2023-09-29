import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FieldsofstudyServiceBase } from "./base/fieldsofstudy.service.base";

@Injectable()
export class FieldsofstudyService extends FieldsofstudyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
