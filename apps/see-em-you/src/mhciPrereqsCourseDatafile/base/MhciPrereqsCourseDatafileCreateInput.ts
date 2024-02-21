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
import {
  IsInt,
  IsOptional,
  IsString,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { MhciPrereqsCourseWhereUniqueInput } from "../../mhciPrereqsCourse/base/MhciPrereqsCourseWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class MhciPrereqsCourseDatafileCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  datafileinfoId?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  note?: string | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  submittedToReviewer!: boolean;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  newFileUploaded!: boolean;

  @ApiProperty({
    required: true,
    type: () => MhciPrereqsCourseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MhciPrereqsCourseWhereUniqueInput)
  @Field(() => MhciPrereqsCourseWhereUniqueInput)
  mhciPrereqsCourses!: MhciPrereqsCourseWhereUniqueInput;
}

export { MhciPrereqsCourseDatafileCreateInput as MhciPrereqsCourseDatafileCreateInput };
