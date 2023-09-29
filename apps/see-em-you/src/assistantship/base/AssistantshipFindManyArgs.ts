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
import { AssistantshipWhereInput } from "./AssistantshipWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AssistantshipOrderByInput } from "./AssistantshipOrderByInput";

@ArgsType()
class AssistantshipFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AssistantshipWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AssistantshipWhereInput, { nullable: true })
  @Type(() => AssistantshipWhereInput)
  where?: AssistantshipWhereInput;

  @ApiProperty({
    required: false,
    type: [AssistantshipOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AssistantshipOrderByInput], { nullable: true })
  @Type(() => AssistantshipOrderByInput)
  orderBy?: Array<AssistantshipOrderByInput>;

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

export { AssistantshipFindManyArgs as AssistantshipFindManyArgs };
