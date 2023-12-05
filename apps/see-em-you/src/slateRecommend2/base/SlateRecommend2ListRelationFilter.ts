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
import { SlateRecommend2WhereInput } from "./SlateRecommend2WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SlateRecommend2ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SlateRecommend2WhereInput,
  })
  @ValidateNested()
  @Type(() => SlateRecommend2WhereInput)
  @IsOptional()
  @Field(() => SlateRecommend2WhereInput, {
    nullable: true,
  })
  every?: SlateRecommend2WhereInput;

  @ApiProperty({
    required: false,
    type: () => SlateRecommend2WhereInput,
  })
  @ValidateNested()
  @Type(() => SlateRecommend2WhereInput)
  @IsOptional()
  @Field(() => SlateRecommend2WhereInput, {
    nullable: true,
  })
  some?: SlateRecommend2WhereInput;

  @ApiProperty({
    required: false,
    type: () => SlateRecommend2WhereInput,
  })
  @ValidateNested()
  @Type(() => SlateRecommend2WhereInput)
  @IsOptional()
  @Field(() => SlateRecommend2WhereInput, {
    nullable: true,
  })
  none?: SlateRecommend2WhereInput;
}
export { SlateRecommend2ListRelationFilter as SlateRecommend2ListRelationFilter };
