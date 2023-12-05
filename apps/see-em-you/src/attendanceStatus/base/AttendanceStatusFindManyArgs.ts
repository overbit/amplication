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
import { AttendanceStatusWhereInput } from "./AttendanceStatusWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AttendanceStatusOrderByInput } from "./AttendanceStatusOrderByInput";

@ArgsType()
class AttendanceStatusFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AttendanceStatusWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AttendanceStatusWhereInput, { nullable: true })
  @Type(() => AttendanceStatusWhereInput)
  where?: AttendanceStatusWhereInput;

  @ApiProperty({
    required: false,
    type: [AttendanceStatusOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AttendanceStatusOrderByInput], { nullable: true })
  @Type(() => AttendanceStatusOrderByInput)
  orderBy?: Array<AttendanceStatusOrderByInput>;

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

export { AttendanceStatusFindManyArgs as AttendanceStatusFindManyArgs };
