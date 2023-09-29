/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LuApplicationAdvisorWhereInput } from "./LuApplicationAdvisorWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LuApplicationAdvisorOrderByInput } from "./LuApplicationAdvisorOrderByInput";

@ArgsType()
class LuApplicationAdvisorFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LuApplicationAdvisorWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LuApplicationAdvisorWhereInput, { nullable: true })
  @Type(() => LuApplicationAdvisorWhereInput)
  where?: LuApplicationAdvisorWhereInput;

  @ApiProperty({
    required: false,
    type: [LuApplicationAdvisorOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LuApplicationAdvisorOrderByInput], { nullable: true })
  @Type(() => LuApplicationAdvisorOrderByInput)
  orderBy?: Array<LuApplicationAdvisorOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LuApplicationAdvisorFindManyArgs as LuApplicationAdvisorFindManyArgs };
