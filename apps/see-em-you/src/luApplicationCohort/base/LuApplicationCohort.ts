/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Application } from "../../application/base/Application";
import { ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";

@ObjectType()
class LuApplicationCohort {
  @ApiProperty({
    required: true,
    type: () => Application,
  })
  @ValidateNested()
  @Type(() => Application)
  application?: Application;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  cohortId!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;
}

export { LuApplicationCohort as LuApplicationCohort };
