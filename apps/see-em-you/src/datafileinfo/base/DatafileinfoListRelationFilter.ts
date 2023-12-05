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
import { DatafileinfoWhereInput } from "./DatafileinfoWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DatafileinfoListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DatafileinfoWhereInput,
  })
  @ValidateNested()
  @Type(() => DatafileinfoWhereInput)
  @IsOptional()
  @Field(() => DatafileinfoWhereInput, {
    nullable: true,
  })
  every?: DatafileinfoWhereInput;

  @ApiProperty({
    required: false,
    type: () => DatafileinfoWhereInput,
  })
  @ValidateNested()
  @Type(() => DatafileinfoWhereInput)
  @IsOptional()
  @Field(() => DatafileinfoWhereInput, {
    nullable: true,
  })
  some?: DatafileinfoWhereInput;

  @ApiProperty({
    required: false,
    type: () => DatafileinfoWhereInput,
  })
  @ValidateNested()
  @Type(() => DatafileinfoWhereInput)
  @IsOptional()
  @Field(() => DatafileinfoWhereInput, {
    nullable: true,
  })
  none?: DatafileinfoWhereInput;
}
export { DatafileinfoListRelationFilter as DatafileinfoListRelationFilter };
