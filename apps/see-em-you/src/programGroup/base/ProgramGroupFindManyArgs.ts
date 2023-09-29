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
import { ProgramGroupWhereInput } from "./ProgramGroupWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProgramGroupOrderByInput } from "./ProgramGroupOrderByInput";

@ArgsType()
class ProgramGroupFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProgramGroupWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProgramGroupWhereInput, { nullable: true })
  @Type(() => ProgramGroupWhereInput)
  where?: ProgramGroupWhereInput;

  @ApiProperty({
    required: false,
    type: [ProgramGroupOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProgramGroupOrderByInput], { nullable: true })
  @Type(() => ProgramGroupOrderByInput)
  orderBy?: Array<ProgramGroupOrderByInput>;

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

export { ProgramGroupFindManyArgs as ProgramGroupFindManyArgs };
