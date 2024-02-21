/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Usertype } from "./Usertype";
import { UsertypeCountArgs } from "./UsertypeCountArgs";
import { UsertypeFindManyArgs } from "./UsertypeFindManyArgs";
import { UsertypeFindUniqueArgs } from "./UsertypeFindUniqueArgs";
import { CreateUsertypeArgs } from "./CreateUsertypeArgs";
import { UpdateUsertypeArgs } from "./UpdateUsertypeArgs";
import { DeleteUsertypeArgs } from "./DeleteUsertypeArgs";
import { UsertypeService } from "../usertype.service";
@graphql.Resolver(() => Usertype)
export class UsertypeResolverBase {
  constructor(protected readonly service: UsertypeService) {}

  async _usertypesMeta(
    @graphql.Args() args: UsertypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Usertype])
  async usertypes(
    @graphql.Args() args: UsertypeFindManyArgs
  ): Promise<Usertype[]> {
    return this.service.usertypes(args);
  }

  @graphql.Query(() => Usertype, { nullable: true })
  async usertype(
    @graphql.Args() args: UsertypeFindUniqueArgs
  ): Promise<Usertype | null> {
    const result = await this.service.usertype(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Usertype)
  async createUsertype(
    @graphql.Args() args: CreateUsertypeArgs
  ): Promise<Usertype> {
    return await this.service.createUsertype({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Usertype)
  async updateUsertype(
    @graphql.Args() args: UpdateUsertypeArgs
  ): Promise<Usertype | null> {
    try {
      return await this.service.updateUsertype({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Usertype)
  async deleteUsertype(
    @graphql.Args() args: DeleteUsertypeArgs
  ): Promise<Usertype | null> {
    try {
      return await this.service.deleteUsertype(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
