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
import { DegreeWhereUniqueInput } from "../../degree/base/DegreeWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { FieldsofstudyWhereUniqueInput } from "../../fieldsofstudy/base/FieldsofstudyWhereUniqueInput";
import { LuApplicationProgramListRelationFilter } from "../../luApplicationProgram/base/LuApplicationProgramListRelationFilter";
import { MlAreaListRelationFilter } from "../../mlArea/base/MlAreaListRelationFilter";
import { PaymentItemListRelationFilter } from "../../paymentItem/base/PaymentItemListRelationFilter";
import { ProgramsApplicationreqListRelationFilter } from "../../programsApplicationreq/base/ProgramsApplicationreqListRelationFilter";

@InputType()
class ProgramModelWhereInput {
  @ApiProperty({
    required: false,
    type: () => DegreeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DegreeWhereUniqueInput)
  @IsOptional()
  @Field(() => DegreeWhereUniqueInput, {
    nullable: true,
  })
  degree?: DegreeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => FieldsofstudyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FieldsofstudyWhereUniqueInput)
  @IsOptional()
  @Field(() => FieldsofstudyWhereUniqueInput, {
    nullable: true,
  })
  fieldsofstudy?: FieldsofstudyWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => LuApplicationProgramListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LuApplicationProgramListRelationFilter)
  @IsOptional()
  @Field(() => LuApplicationProgramListRelationFilter, {
    nullable: true,
  })
  luApplicationPrograms?: LuApplicationProgramListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MlAreaListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MlAreaListRelationFilter)
  @IsOptional()
  @Field(() => MlAreaListRelationFilter, {
    nullable: true,
  })
  mlArea?: MlAreaListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PaymentItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PaymentItemListRelationFilter)
  @IsOptional()
  @Field(() => PaymentItemListRelationFilter, {
    nullable: true,
  })
  paymentItem?: PaymentItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProgramsApplicationreqListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProgramsApplicationreqListRelationFilter)
  @IsOptional()
  @Field(() => ProgramsApplicationreqListRelationFilter, {
    nullable: true,
  })
  programsApplicationreqs?: ProgramsApplicationreqListRelationFilter;
}

export { ProgramModelWhereInput as ProgramModelWhereInput };
