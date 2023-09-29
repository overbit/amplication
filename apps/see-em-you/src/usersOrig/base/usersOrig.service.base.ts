/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UsersOrig } from "@prisma/client";

export class UsersOrigServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UsersOrigCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersOrigCountArgs>
  ): Promise<number> {
    return this.prisma.usersOrig.count(args);
  }

  async findMany<T extends Prisma.UsersOrigFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersOrigFindManyArgs>
  ): Promise<UsersOrig[]> {
    return this.prisma.usersOrig.findMany(args);
  }
  async findOne<T extends Prisma.UsersOrigFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersOrigFindUniqueArgs>
  ): Promise<UsersOrig | null> {
    return this.prisma.usersOrig.findUnique(args);
  }
  async create<T extends Prisma.UsersOrigCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersOrigCreateArgs>
  ): Promise<UsersOrig> {
    return this.prisma.usersOrig.create<T>(args);
  }
  async update<T extends Prisma.UsersOrigUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersOrigUpdateArgs>
  ): Promise<UsersOrig> {
    return this.prisma.usersOrig.update<T>(args);
  }
  async delete<T extends Prisma.UsersOrigDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersOrigDeleteArgs>
  ): Promise<UsersOrig> {
    return this.prisma.usersOrig.delete(args);
  }
}
