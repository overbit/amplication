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
import { ReviewPositiveFactorOtherWhereInput } from "./ReviewPositiveFactorOtherWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ReviewPositiveFactorOtherCountArgs {
  @ApiProperty({
    required: false,
    type: () => ReviewPositiveFactorOtherWhereInput,
  })
  @Field(() => ReviewPositiveFactorOtherWhereInput, { nullable: true })
  @Type(() => ReviewPositiveFactorOtherWhereInput)
  where?: ReviewPositiveFactorOtherWhereInput;
}

export { ReviewPositiveFactorOtherCountArgs as ReviewPositiveFactorOtherCountArgs };
