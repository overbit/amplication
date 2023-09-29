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
import { CcPaymentStatusWhereInput } from "./CcPaymentStatusWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CcPaymentStatusOrderByInput } from "./CcPaymentStatusOrderByInput";

@ArgsType()
class CcPaymentStatusFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CcPaymentStatusWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CcPaymentStatusWhereInput, { nullable: true })
  @Type(() => CcPaymentStatusWhereInput)
  where?: CcPaymentStatusWhereInput;

  @ApiProperty({
    required: false,
    type: [CcPaymentStatusOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CcPaymentStatusOrderByInput], { nullable: true })
  @Type(() => CcPaymentStatusOrderByInput)
  orderBy?: Array<CcPaymentStatusOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CcPaymentStatusFindManyArgs as CcPaymentStatusFindManyArgs };
