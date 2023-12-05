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
import { ProgramGroupProgramWhereInput } from "./ProgramGroupProgramWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProgramGroupProgramOrderByInput } from "./ProgramGroupProgramOrderByInput";

@ArgsType()
class ProgramGroupProgramFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProgramGroupProgramWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProgramGroupProgramWhereInput, { nullable: true })
  @Type(() => ProgramGroupProgramWhereInput)
  where?: ProgramGroupProgramWhereInput;

  @ApiProperty({
    required: false,
    type: [ProgramGroupProgramOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProgramGroupProgramOrderByInput], { nullable: true })
  @Type(() => ProgramGroupProgramOrderByInput)
  orderBy?: Array<ProgramGroupProgramOrderByInput>;

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

export { ProgramGroupProgramFindManyArgs as ProgramGroupProgramFindManyArgs };
