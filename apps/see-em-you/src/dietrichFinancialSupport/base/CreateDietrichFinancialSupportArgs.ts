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
import { DietrichFinancialSupportCreateInput } from "./DietrichFinancialSupportCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateDietrichFinancialSupportArgs {
  @ApiProperty({
    required: true,
    type: () => DietrichFinancialSupportCreateInput,
  })
  @ValidateNested()
  @Type(() => DietrichFinancialSupportCreateInput)
  @Field(() => DietrichFinancialSupportCreateInput, { nullable: false })
  data!: DietrichFinancialSupportCreateInput;
}

export { CreateDietrichFinancialSupportArgs as CreateDietrichFinancialSupportArgs };
