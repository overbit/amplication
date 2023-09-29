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
import { MseInterviewWhereInput } from "./MseInterviewWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MseInterviewOrderByInput } from "./MseInterviewOrderByInput";

@ArgsType()
class MseInterviewFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MseInterviewWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MseInterviewWhereInput, { nullable: true })
  @Type(() => MseInterviewWhereInput)
  where?: MseInterviewWhereInput;

  @ApiProperty({
    required: false,
    type: [MseInterviewOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MseInterviewOrderByInput], { nullable: true })
  @Type(() => MseInterviewOrderByInput)
  orderBy?: Array<MseInterviewOrderByInput>;

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

export { MseInterviewFindManyArgs as MseInterviewFindManyArgs };
