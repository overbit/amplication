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
import { CampusWhereInput } from "./CampusWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CampusOrderByInput } from "./CampusOrderByInput";

@ArgsType()
class CampusFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CampusWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CampusWhereInput, { nullable: true })
  @Type(() => CampusWhereInput)
  where?: CampusWhereInput;

  @ApiProperty({
    required: false,
    type: [CampusOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CampusOrderByInput], { nullable: true })
  @Type(() => CampusOrderByInput)
  orderBy?: Array<CampusOrderByInput>;

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

export { CampusFindManyArgs as CampusFindManyArgs };
