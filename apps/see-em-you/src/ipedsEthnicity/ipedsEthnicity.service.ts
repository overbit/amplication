import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IpedsEthnicityServiceBase } from "./base/ipedsEthnicity.service.base";

@Injectable()
export class IpedsEthnicityService extends IpedsEthnicityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
