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
import { IniDisciplinaryActionWhereInput } from "./IniDisciplinaryActionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class IniDisciplinaryActionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => IniDisciplinaryActionWhereInput,
  })
  @ValidateNested()
  @Type(() => IniDisciplinaryActionWhereInput)
  @IsOptional()
  @Field(() => IniDisciplinaryActionWhereInput, {
    nullable: true,
  })
  every?: IniDisciplinaryActionWhereInput;

  @ApiProperty({
    required: false,
    type: () => IniDisciplinaryActionWhereInput,
  })
  @ValidateNested()
  @Type(() => IniDisciplinaryActionWhereInput)
  @IsOptional()
  @Field(() => IniDisciplinaryActionWhereInput, {
    nullable: true,
  })
  some?: IniDisciplinaryActionWhereInput;

  @ApiProperty({
    required: false,
    type: () => IniDisciplinaryActionWhereInput,
  })
  @ValidateNested()
  @Type(() => IniDisciplinaryActionWhereInput)
  @IsOptional()
  @Field(() => IniDisciplinaryActionWhereInput, {
    nullable: true,
  })
  none?: IniDisciplinaryActionWhereInput;
}
export { IniDisciplinaryActionListRelationFilter as IniDisciplinaryActionListRelationFilter };
