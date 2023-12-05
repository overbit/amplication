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
import { LuApplicationCohortWhereInput } from "./LuApplicationCohortWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LuApplicationCohortListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LuApplicationCohortWhereInput,
  })
  @ValidateNested()
  @Type(() => LuApplicationCohortWhereInput)
  @IsOptional()
  @Field(() => LuApplicationCohortWhereInput, {
    nullable: true,
  })
  every?: LuApplicationCohortWhereInput;

  @ApiProperty({
    required: false,
    type: () => LuApplicationCohortWhereInput,
  })
  @ValidateNested()
  @Type(() => LuApplicationCohortWhereInput)
  @IsOptional()
  @Field(() => LuApplicationCohortWhereInput, {
    nullable: true,
  })
  some?: LuApplicationCohortWhereInput;

  @ApiProperty({
    required: false,
    type: () => LuApplicationCohortWhereInput,
  })
  @ValidateNested()
  @Type(() => LuApplicationCohortWhereInput)
  @IsOptional()
  @Field(() => LuApplicationCohortWhereInput, {
    nullable: true,
  })
  none?: LuApplicationCohortWhereInput;
}
export { LuApplicationCohortListRelationFilter as LuApplicationCohortListRelationFilter };
