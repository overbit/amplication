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
import {
  IsInt,
  IsDate,
  IsEnum,
  IsOptional,
  ValidateNested,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumPromotionHistoryPromotionMethod } from "./EnumPromotionHistoryPromotionMethod";
import { Application } from "../../application/base/Application";

@ObjectType()
class PromotionHistory {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  programId!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  statusTime!: Date;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  round!: number;

  @ApiProperty({
    required: true,
    enum: EnumPromotionHistoryPromotionMethod,
  })
  @IsEnum(EnumPromotionHistoryPromotionMethod)
  @Field(() => EnumPromotionHistoryPromotionMethod, {
    nullable: true,
  })
  promotion_method?: "default" | "voting" | "promotion" | "demotion";

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  usersId!: number | null;

  @ApiProperty({
    required: true,
    type: () => Application,
  })
  @ValidateNested()
  @Type(() => Application)
  application?: Application;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;
}

export { PromotionHistory as PromotionHistory };
