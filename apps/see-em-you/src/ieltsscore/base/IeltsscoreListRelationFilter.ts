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
import { IeltsscoreWhereInput } from "./IeltsscoreWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class IeltsscoreListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => IeltsscoreWhereInput,
  })
  @ValidateNested()
  @Type(() => IeltsscoreWhereInput)
  @IsOptional()
  @Field(() => IeltsscoreWhereInput, {
    nullable: true,
  })
  every?: IeltsscoreWhereInput;

  @ApiProperty({
    required: false,
    type: () => IeltsscoreWhereInput,
  })
  @ValidateNested()
  @Type(() => IeltsscoreWhereInput)
  @IsOptional()
  @Field(() => IeltsscoreWhereInput, {
    nullable: true,
  })
  some?: IeltsscoreWhereInput;

  @ApiProperty({
    required: false,
    type: () => IeltsscoreWhereInput,
  })
  @ValidateNested()
  @Type(() => IeltsscoreWhereInput)
  @IsOptional()
  @Field(() => IeltsscoreWhereInput, {
    nullable: true,
  })
  none?: IeltsscoreWhereInput;
}
export { IeltsscoreListRelationFilter as IeltsscoreListRelationFilter };
