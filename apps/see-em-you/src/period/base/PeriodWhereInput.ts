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
import { AaDepartmentListRelationFilter } from "../../aaDepartment/base/AaDepartmentListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CohortListRelationFilter } from "../../cohort/base/CohortListRelationFilter";
import { PeriodApplicationListRelationFilter } from "../../periodApplication/base/PeriodApplicationListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

@InputType()
class PeriodWhereInput {
  @ApiProperty({
    required: false,
    type: () => AaDepartmentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AaDepartmentListRelationFilter)
  @IsOptional()
  @Field(() => AaDepartmentListRelationFilter, {
    nullable: true,
  })
  aaDepartment?: AaDepartmentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CohortListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CohortListRelationFilter)
  @IsOptional()
  @Field(() => CohortListRelationFilter, {
    nullable: true,
  })
  cohort?: CohortListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PeriodApplicationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PeriodApplicationListRelationFilter)
  @IsOptional()
  @Field(() => PeriodApplicationListRelationFilter, {
    nullable: true,
  })
  periodApplication?: PeriodApplicationListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;
}

export { PeriodWhereInput as PeriodWhereInput };
