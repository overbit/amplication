/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, ValidateNested } from "class-validator";
import { MhciPrereqsConversationCommentCreateNestedManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsConversationCommentCreateNestedManyWithoutLuUsersUsertypesInput";
import { Type } from "class-transformer";
import { MhciPrereqsCourseCreateNestedManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsCourseCreateNestedManyWithoutLuUsersUsertypesInput";
import { MhciPrereqsDesignPortfolioCreateNestedManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsDesignPortfolioCreateNestedManyWithoutLuUsersUsertypesInput";
import { MhciPrereqsProgrammingSampleWhereUniqueInput } from "../../mhciPrereqsProgrammingSample/base/MhciPrereqsProgrammingSampleWhereUniqueInput";
import { MhciPrereqsProgrammingTestCreateNestedManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsProgrammingTestCreateNestedManyWithoutLuUsersUsertypesInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class LuUsersUsertypeCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  domain?: number | null;

  @ApiProperty({
    required: false,
    type: () =>
      MhciPrereqsConversationCommentCreateNestedManyWithoutLuUsersUsertypesInput,
  })
  @ValidateNested()
  @Type(
    () =>
      MhciPrereqsConversationCommentCreateNestedManyWithoutLuUsersUsertypesInput
  )
  @IsOptional()
  @Field(
    () =>
      MhciPrereqsConversationCommentCreateNestedManyWithoutLuUsersUsertypesInput,
    {
      nullable: true,
    }
  )
  mhciPrereqsConversationComments?: MhciPrereqsConversationCommentCreateNestedManyWithoutLuUsersUsertypesInput;

  @ApiProperty({
    required: false,
    type: () => MhciPrereqsCourseCreateNestedManyWithoutLuUsersUsertypesInput,
  })
  @ValidateNested()
  @Type(() => MhciPrereqsCourseCreateNestedManyWithoutLuUsersUsertypesInput)
  @IsOptional()
  @Field(() => MhciPrereqsCourseCreateNestedManyWithoutLuUsersUsertypesInput, {
    nullable: true,
  })
  mhciPrereqsCourses?: MhciPrereqsCourseCreateNestedManyWithoutLuUsersUsertypesInput;

  @ApiProperty({
    required: false,
    type: () =>
      MhciPrereqsDesignPortfolioCreateNestedManyWithoutLuUsersUsertypesInput,
  })
  @ValidateNested()
  @Type(
    () => MhciPrereqsDesignPortfolioCreateNestedManyWithoutLuUsersUsertypesInput
  )
  @IsOptional()
  @Field(
    () =>
      MhciPrereqsDesignPortfolioCreateNestedManyWithoutLuUsersUsertypesInput,
    {
      nullable: true,
    }
  )
  mhciPrereqsDesignPortfolios?: MhciPrereqsDesignPortfolioCreateNestedManyWithoutLuUsersUsertypesInput;

  @ApiProperty({
    required: false,
    type: () => MhciPrereqsProgrammingSampleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MhciPrereqsProgrammingSampleWhereUniqueInput)
  @IsOptional()
  @Field(() => MhciPrereqsProgrammingSampleWhereUniqueInput, {
    nullable: true,
  })
  mhciPrereqsProgrammingSamples?: MhciPrereqsProgrammingSampleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () =>
      MhciPrereqsProgrammingTestCreateNestedManyWithoutLuUsersUsertypesInput,
  })
  @ValidateNested()
  @Type(
    () => MhciPrereqsProgrammingTestCreateNestedManyWithoutLuUsersUsertypesInput
  )
  @IsOptional()
  @Field(
    () =>
      MhciPrereqsProgrammingTestCreateNestedManyWithoutLuUsersUsertypesInput,
    {
      nullable: true,
    }
  )
  mhciPrereqsProgrammingTests?: MhciPrereqsProgrammingTestCreateNestedManyWithoutLuUsersUsertypesInput;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  users!: UserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  usertypeId!: number;
}

export { LuUsersUsertypeCreateInput as LuUsersUsertypeCreateInput };
