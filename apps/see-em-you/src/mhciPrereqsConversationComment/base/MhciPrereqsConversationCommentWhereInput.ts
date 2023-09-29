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
import { LuUsersUsertypeWhereUniqueInput } from "../../luUsersUsertype/base/LuUsersUsertypeWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { MhciPrereqWhereUniqueInput } from "../../mhciPrereq/base/MhciPrereqWhereUniqueInput";

@InputType()
class MhciPrereqsConversationCommentWhereInput {
  @ApiProperty({
    required: false,
    type: () => LuUsersUsertypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LuUsersUsertypeWhereUniqueInput)
  @IsOptional()
  @Field(() => LuUsersUsertypeWhereUniqueInput, {
    nullable: true,
  })
  luUsersUsertypes?: LuUsersUsertypeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => MhciPrereqWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MhciPrereqWhereUniqueInput)
  @IsOptional()
  @Field(() => MhciPrereqWhereUniqueInput, {
    nullable: true,
  })
  mhciPrereqs?: MhciPrereqWhereUniqueInput;
}

export { MhciPrereqsConversationCommentWhereInput as MhciPrereqsConversationCommentWhereInput };
