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
import { SlateProgramsMseReviewedWhereInput } from "./SlateProgramsMseReviewedWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SlateProgramsMseReviewedListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SlateProgramsMseReviewedWhereInput,
  })
  @ValidateNested()
  @Type(() => SlateProgramsMseReviewedWhereInput)
  @IsOptional()
  @Field(() => SlateProgramsMseReviewedWhereInput, {
    nullable: true,
  })
  every?: SlateProgramsMseReviewedWhereInput;

  @ApiProperty({
    required: false,
    type: () => SlateProgramsMseReviewedWhereInput,
  })
  @ValidateNested()
  @Type(() => SlateProgramsMseReviewedWhereInput)
  @IsOptional()
  @Field(() => SlateProgramsMseReviewedWhereInput, {
    nullable: true,
  })
  some?: SlateProgramsMseReviewedWhereInput;

  @ApiProperty({
    required: false,
    type: () => SlateProgramsMseReviewedWhereInput,
  })
  @ValidateNested()
  @Type(() => SlateProgramsMseReviewedWhereInput)
  @IsOptional()
  @Field(() => SlateProgramsMseReviewedWhereInput, {
    nullable: true,
  })
  none?: SlateProgramsMseReviewedWhereInput;
}
export { SlateProgramsMseReviewedListRelationFilter as SlateProgramsMseReviewedListRelationFilter };
