/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GroupRankCommentWhereUniqueInput } from "./GroupRankCommentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { GroupRankCommentUpdateInput } from "./GroupRankCommentUpdateInput";

@ArgsType()
class UpdateGroupRankCommentArgs {
  @ApiProperty({
    required: true,
    type: () => GroupRankCommentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GroupRankCommentWhereUniqueInput)
  @Field(() => GroupRankCommentWhereUniqueInput, { nullable: false })
  where!: GroupRankCommentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => GroupRankCommentUpdateInput,
  })
  @ValidateNested()
  @Type(() => GroupRankCommentUpdateInput)
  @Field(() => GroupRankCommentUpdateInput, { nullable: false })
  data!: GroupRankCommentUpdateInput;
}

export { UpdateGroupRankCommentArgs as UpdateGroupRankCommentArgs };
