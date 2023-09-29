import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JiravoteServiceBase } from "./base/jiravote.service.base";

@Injectable()
export class JiravoteService extends JiravoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
