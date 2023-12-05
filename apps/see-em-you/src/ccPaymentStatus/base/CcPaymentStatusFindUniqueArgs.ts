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
import { CcPaymentStatusWhereUniqueInput } from "./CcPaymentStatusWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CcPaymentStatusFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => CcPaymentStatusWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CcPaymentStatusWhereUniqueInput)
  @Field(() => CcPaymentStatusWhereUniqueInput, { nullable: false })
  where!: CcPaymentStatusWhereUniqueInput;
}

export { CcPaymentStatusFindUniqueArgs as CcPaymentStatusFindUniqueArgs };
