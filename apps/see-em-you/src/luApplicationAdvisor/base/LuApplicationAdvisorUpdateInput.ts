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
import { IsInt, IsOptional, ValidateNested, IsString } from "class-validator";
import { ApplicationWhereUniqueInput } from "../../application/base/ApplicationWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class LuApplicationAdvisorUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  advisorType?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  advisorUserId?: number | null;

  @ApiProperty({
    required: false,
    type: () => ApplicationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ApplicationWhereUniqueInput)
  @IsOptional()
  @Field(() => ApplicationWhereUniqueInput, {
    nullable: true,
  })
  application?: ApplicationWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  choice?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  programId?: number | null;
}

export { LuApplicationAdvisorUpdateInput as LuApplicationAdvisorUpdateInput };
