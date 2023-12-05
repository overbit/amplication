import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VoucherProgramServiceBase } from "./base/voucherProgram.service.base";

@Injectable()
export class VoucherProgramService extends VoucherProgramServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
