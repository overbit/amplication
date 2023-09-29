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
import { MhciPrereqWhereUniqueInput } from "../../mhciPrereq/base/MhciPrereqWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  IsString,
  IsEnum,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumMhciPrereqsStatusReviewerStatus } from "./EnumMhciPrereqsStatusReviewerStatus";
import { EnumMhciPrereqsStatusStatus3 } from "./EnumMhciPrereqsStatusStatus3";

@InputType()
class MhciPrereqsStatusUpdateInput {
  @ApiProperty({
    required: false,
    type: () => MhciPrereqWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MhciPrereqWhereUniqueInput)
  @IsOptional()
  @Field(() => MhciPrereqWhereUniqueInput, {
    nullable: true,
  })
  mhciPrereqs?: MhciPrereqWhereUniqueInput;

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

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reviewerExplanation?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  reviewerLuUsersUsertypesId?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumMhciPrereqsStatusReviewerStatus,
  })
  @IsEnum(EnumMhciPrereqsStatusReviewerStatus)
  @IsOptional()
  @Field(() => EnumMhciPrereqsStatusReviewerStatus, {
    nullable: true,
  })
  reviewer_status?:
    | "Not_Submitted"
    | "Submitted"
    | "In_progress"
    | "Approved_plan_"
    | "Fulfilled__undergraduate_degree"
    | "Fulfilled_";

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  reviewerTimestamp?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumMhciPrereqsStatusStatus3,
  })
  @IsEnum(EnumMhciPrereqsStatusStatus3)
  @IsOptional()
  @Field(() => EnumMhciPrereqsStatusStatus3, {
    nullable: true,
  })
  status3?:
    | "Saved_Not_Submitted"
    | "Student_Submitted"
    | "Student_Edited"
    | "Reviewer_Responded"
    | null;
}

export { MhciPrereqsStatusUpdateInput as MhciPrereqsStatusUpdateInput };
