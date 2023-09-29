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
import { SlateIeltWhereUniqueInput } from "./SlateIeltWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SlateIeltUpdateInput } from "./SlateIeltUpdateInput";

@ArgsType()
class UpdateSlateIeltArgs {
  @ApiProperty({
    required: true,
    type: () => SlateIeltWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SlateIeltWhereUniqueInput)
  @Field(() => SlateIeltWhereUniqueInput, { nullable: false })
  where!: SlateIeltWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SlateIeltUpdateInput,
  })
  @ValidateNested()
  @Type(() => SlateIeltUpdateInput)
  @Field(() => SlateIeltUpdateInput, { nullable: false })
  data!: SlateIeltUpdateInput;
}

export { UpdateSlateIeltArgs as UpdateSlateIeltArgs };
