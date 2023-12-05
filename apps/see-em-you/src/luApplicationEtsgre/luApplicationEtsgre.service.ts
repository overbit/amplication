import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuApplicationEtsgreServiceBase } from "./base/luApplicationEtsgre.service.base";

@Injectable()
export class LuApplicationEtsgreService extends LuApplicationEtsgreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
