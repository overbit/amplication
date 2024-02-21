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
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { MhciPrereqsConversationCommentListRelationFilter } from "../../mhciPrereqsConversationComment/base/MhciPrereqsConversationCommentListRelationFilter";
import { MhciPrereqsCourseListRelationFilter } from "../../mhciPrereqsCourse/base/MhciPrereqsCourseListRelationFilter";
import { MhciPrereqsDesignPortfolioListRelationFilter } from "../../mhciPrereqsDesignPortfolio/base/MhciPrereqsDesignPortfolioListRelationFilter";
import { MhciPrereqsProgrammingSampleWhereUniqueInput } from "../../mhciPrereqsProgrammingSample/base/MhciPrereqsProgrammingSampleWhereUniqueInput";
import { MhciPrereqsProgrammingTestListRelationFilter } from "../../mhciPrereqsProgrammingTest/base/MhciPrereqsProgrammingTestListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

@InputType()
class LuUsersUsertypeWhereInput {
  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  users?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => MhciPrereqsConversationCommentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MhciPrereqsConversationCommentListRelationFilter)
  @IsOptional()
  @Field(() => MhciPrereqsConversationCommentListRelationFilter, {
    nullable: true,
  })
  mhciPrereqsConversationComments?: MhciPrereqsConversationCommentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MhciPrereqsCourseListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MhciPrereqsCourseListRelationFilter)
  @IsOptional()
  @Field(() => MhciPrereqsCourseListRelationFilter, {
    nullable: true,
  })
  mhciPrereqsCourses?: MhciPrereqsCourseListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MhciPrereqsDesignPortfolioListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MhciPrereqsDesignPortfolioListRelationFilter)
  @IsOptional()
  @Field(() => MhciPrereqsDesignPortfolioListRelationFilter, {
    nullable: true,
  })
  mhciPrereqsDesignPortfolios?: MhciPrereqsDesignPortfolioListRelationFilter;

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
  mhciPrereqsProgrammingSamples?: MhciPrereqsProgrammingSampleWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => MhciPrereqsProgrammingTestListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MhciPrereqsProgrammingTestListRelationFilter)
  @IsOptional()
  @Field(() => MhciPrereqsProgrammingTestListRelationFilter, {
    nullable: true,
  })
  mhciPrereqsProgrammingTests?: MhciPrereqsProgrammingTestListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;
}

export { LuUsersUsertypeWhereInput as LuUsersUsertypeWhereInput };
