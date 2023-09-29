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
import { CcTransactionSummaryWhereInput } from "./CcTransactionSummaryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CcTransactionSummaryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CcTransactionSummaryWhereInput,
  })
  @ValidateNested()
  @Type(() => CcTransactionSummaryWhereInput)
  @IsOptional()
  @Field(() => CcTransactionSummaryWhereInput, {
    nullable: true,
  })
  every?: CcTransactionSummaryWhereInput;

  @ApiProperty({
    required: false,
    type: () => CcTransactionSummaryWhereInput,
  })
  @ValidateNested()
  @Type(() => CcTransactionSummaryWhereInput)
  @IsOptional()
  @Field(() => CcTransactionSummaryWhereInput, {
    nullable: true,
  })
  some?: CcTransactionSummaryWhereInput;

  @ApiProperty({
    required: false,
    type: () => CcTransactionSummaryWhereInput,
  })
  @ValidateNested()
  @Type(() => CcTransactionSummaryWhereInput)
  @IsOptional()
  @Field(() => CcTransactionSummaryWhereInput, {
    nullable: true,
  })
  none?: CcTransactionSummaryWhereInput;
}
export { CcTransactionSummaryListRelationFilter as CcTransactionSummaryListRelationFilter };
