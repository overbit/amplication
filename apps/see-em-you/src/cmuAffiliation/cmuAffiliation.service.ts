import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CmuAffiliationServiceBase } from "./base/cmuAffiliation.service.base";

@Injectable()
export class CmuAffiliationService extends CmuAffiliationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
