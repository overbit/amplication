import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SearchTextTestServiceBase } from "./base/searchTextTest.service.base";

@Injectable()
export class SearchTextTestService extends SearchTextTestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
