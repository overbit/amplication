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
import { SpecialConsiderationWhereInput } from "./SpecialConsiderationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SpecialConsiderationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SpecialConsiderationWhereInput,
  })
  @ValidateNested()
  @Type(() => SpecialConsiderationWhereInput)
  @IsOptional()
  @Field(() => SpecialConsiderationWhereInput, {
    nullable: true,
  })
  every?: SpecialConsiderationWhereInput;

  @ApiProperty({
    required: false,
    type: () => SpecialConsiderationWhereInput,
  })
  @ValidateNested()
  @Type(() => SpecialConsiderationWhereInput)
  @IsOptional()
  @Field(() => SpecialConsiderationWhereInput, {
    nullable: true,
  })
  some?: SpecialConsiderationWhereInput;

  @ApiProperty({
    required: false,
    type: () => SpecialConsiderationWhereInput,
  })
  @ValidateNested()
  @Type(() => SpecialConsiderationWhereInput)
  @IsOptional()
  @Field(() => SpecialConsiderationWhereInput, {
    nullable: true,
  })
  none?: SpecialConsiderationWhereInput;
}
export { SpecialConsiderationListRelationFilter as SpecialConsiderationListRelationFilter };
