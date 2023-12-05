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
import { AaDepartmentWhereInput } from "./AaDepartmentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AaDepartmentOrderByInput } from "./AaDepartmentOrderByInput";

@ArgsType()
class AaDepartmentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AaDepartmentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AaDepartmentWhereInput, { nullable: true })
  @Type(() => AaDepartmentWhereInput)
  where?: AaDepartmentWhereInput;

  @ApiProperty({
    required: false,
    type: [AaDepartmentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AaDepartmentOrderByInput], { nullable: true })
  @Type(() => AaDepartmentOrderByInput)
  orderBy?: Array<AaDepartmentOrderByInput>;

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

export { AaDepartmentFindManyArgs as AaDepartmentFindManyArgs };
