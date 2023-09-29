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
import { ApplicationDecisionSchoolWhereInput } from "./ApplicationDecisionSchoolWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ApplicationDecisionSchoolListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ApplicationDecisionSchoolWhereInput,
  })
  @ValidateNested()
  @Type(() => ApplicationDecisionSchoolWhereInput)
  @IsOptional()
  @Field(() => ApplicationDecisionSchoolWhereInput, {
    nullable: true,
  })
  every?: ApplicationDecisionSchoolWhereInput;

  @ApiProperty({
    required: false,
    type: () => ApplicationDecisionSchoolWhereInput,
  })
  @ValidateNested()
  @Type(() => ApplicationDecisionSchoolWhereInput)
  @IsOptional()
  @Field(() => ApplicationDecisionSchoolWhereInput, {
    nullable: true,
  })
  some?: ApplicationDecisionSchoolWhereInput;

  @ApiProperty({
    required: false,
    type: () => ApplicationDecisionSchoolWhereInput,
  })
  @ValidateNested()
  @Type(() => ApplicationDecisionSchoolWhereInput)
  @IsOptional()
  @Field(() => ApplicationDecisionSchoolWhereInput, {
    nullable: true,
  })
  none?: ApplicationDecisionSchoolWhereInput;
}
export { ApplicationDecisionSchoolListRelationFilter as ApplicationDecisionSchoolListRelationFilter };
