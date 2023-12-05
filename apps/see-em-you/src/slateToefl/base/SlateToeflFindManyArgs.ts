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
import { SlateToeflWhereInput } from "./SlateToeflWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SlateToeflOrderByInput } from "./SlateToeflOrderByInput";

@ArgsType()
class SlateToeflFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SlateToeflWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SlateToeflWhereInput, { nullable: true })
  @Type(() => SlateToeflWhereInput)
  where?: SlateToeflWhereInput;

  @ApiProperty({
    required: false,
    type: [SlateToeflOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SlateToeflOrderByInput], { nullable: true })
  @Type(() => SlateToeflOrderByInput)
  orderBy?: Array<SlateToeflOrderByInput>;

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

export { SlateToeflFindManyArgs as SlateToeflFindManyArgs };
