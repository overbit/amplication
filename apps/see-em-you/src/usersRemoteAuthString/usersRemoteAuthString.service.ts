import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsersRemoteAuthStringServiceBase } from "./base/usersRemoteAuthString.service.base";

@Injectable()
export class UsersRemoteAuthStringService extends UsersRemoteAuthStringServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
