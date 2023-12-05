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
import { EtsGreWhereUniqueInput } from "./EtsGreWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EtsGreUpdateInput } from "./EtsGreUpdateInput";

@ArgsType()
class UpdateEtsGreArgs {
  @ApiProperty({
    required: true,
    type: () => EtsGreWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EtsGreWhereUniqueInput)
  @Field(() => EtsGreWhereUniqueInput, { nullable: false })
  where!: EtsGreWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EtsGreUpdateInput,
  })
  @ValidateNested()
  @Type(() => EtsGreUpdateInput)
  @Field(() => EtsGreUpdateInput, { nullable: false })
  data!: EtsGreUpdateInput;
}

export { UpdateEtsGreArgs as UpdateEtsGreArgs };
