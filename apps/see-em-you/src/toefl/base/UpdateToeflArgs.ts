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
import { ToeflWhereUniqueInput } from "./ToeflWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ToeflUpdateInput } from "./ToeflUpdateInput";

@ArgsType()
class UpdateToeflArgs {
  @ApiProperty({
    required: true,
    type: () => ToeflWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ToeflWhereUniqueInput)
  @Field(() => ToeflWhereUniqueInput, { nullable: false })
  where!: ToeflWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ToeflUpdateInput,
  })
  @ValidateNested()
  @Type(() => ToeflUpdateInput)
  @Field(() => ToeflUpdateInput, { nullable: false })
  data!: ToeflUpdateInput;
}

export { UpdateToeflArgs as UpdateToeflArgs };
