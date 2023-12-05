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
import { SystemenvWhereInput } from "./SystemenvWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SystemenvOrderByInput } from "./SystemenvOrderByInput";

@ArgsType()
class SystemenvFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SystemenvWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SystemenvWhereInput, { nullable: true })
  @Type(() => SystemenvWhereInput)
  where?: SystemenvWhereInput;

  @ApiProperty({
    required: false,
    type: [SystemenvOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SystemenvOrderByInput], { nullable: true })
  @Type(() => SystemenvOrderByInput)
  orderBy?: Array<SystemenvOrderByInput>;

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

export { SystemenvFindManyArgs as SystemenvFindManyArgs };
