import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CountryServiceBase } from "./base/country.service.base";

@Injectable()
export class CountryService extends CountryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
