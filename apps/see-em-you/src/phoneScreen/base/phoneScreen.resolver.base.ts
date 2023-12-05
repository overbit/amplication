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
import { PhoneScreen } from "./PhoneScreen";
import { PhoneScreenCountArgs } from "./PhoneScreenCountArgs";
import { PhoneScreenFindManyArgs } from "./PhoneScreenFindManyArgs";
import { PhoneScreenFindUniqueArgs } from "./PhoneScreenFindUniqueArgs";
import { CreatePhoneScreenArgs } from "./CreatePhoneScreenArgs";
import { UpdatePhoneScreenArgs } from "./UpdatePhoneScreenArgs";
import { DeletePhoneScreenArgs } from "./DeletePhoneScreenArgs";
import { PhoneScreenService } from "../phoneScreen.service";
@graphql.Resolver(() => PhoneScreen)
export class PhoneScreenResolverBase {
  constructor(protected readonly service: PhoneScreenService) {}

  async _phoneScreensMeta(
    @graphql.Args() args: PhoneScreenCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PhoneScreen])
  async phoneScreens(
    @graphql.Args() args: PhoneScreenFindManyArgs
  ): Promise<PhoneScreen[]> {
    return this.service.phoneScreens(args);
  }

  @graphql.Query(() => PhoneScreen, { nullable: true })
  async phoneScreen(
    @graphql.Args() args: PhoneScreenFindUniqueArgs
  ): Promise<PhoneScreen | null> {
    const result = await this.service.phoneScreen(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PhoneScreen)
  async createPhoneScreen(
    @graphql.Args() args: CreatePhoneScreenArgs
  ): Promise<PhoneScreen> {
    return await this.service.createPhoneScreen({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PhoneScreen)
  async updatePhoneScreen(
    @graphql.Args() args: UpdatePhoneScreenArgs
  ): Promise<PhoneScreen | null> {
    try {
      return await this.service.updatePhoneScreen({
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

  @graphql.Mutation(() => PhoneScreen)
  async deletePhoneScreen(
    @graphql.Args() args: DeletePhoneScreenArgs
  ): Promise<PhoneScreen | null> {
    try {
      return await this.service.deletePhoneScreen(args);
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
