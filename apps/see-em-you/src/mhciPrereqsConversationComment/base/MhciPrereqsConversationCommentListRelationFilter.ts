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
import { MhciPrereqsConversationCommentWhereInput } from "./MhciPrereqsConversationCommentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MhciPrereqsConversationCommentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MhciPrereqsConversationCommentWhereInput,
  })
  @ValidateNested()
  @Type(() => MhciPrereqsConversationCommentWhereInput)
  @IsOptional()
  @Field(() => MhciPrereqsConversationCommentWhereInput, {
    nullable: true,
  })
  every?: MhciPrereqsConversationCommentWhereInput;

  @ApiProperty({
    required: false,
    type: () => MhciPrereqsConversationCommentWhereInput,
  })
  @ValidateNested()
  @Type(() => MhciPrereqsConversationCommentWhereInput)
  @IsOptional()
  @Field(() => MhciPrereqsConversationCommentWhereInput, {
    nullable: true,
  })
  some?: MhciPrereqsConversationCommentWhereInput;

  @ApiProperty({
    required: false,
    type: () => MhciPrereqsConversationCommentWhereInput,
  })
  @ValidateNested()
  @Type(() => MhciPrereqsConversationCommentWhereInput)
  @IsOptional()
  @Field(() => MhciPrereqsConversationCommentWhereInput, {
    nullable: true,
  })
  none?: MhciPrereqsConversationCommentWhereInput;
}
export { MhciPrereqsConversationCommentListRelationFilter as MhciPrereqsConversationCommentListRelationFilter };
