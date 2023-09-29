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
import { DomainWhereUniqueInput } from "../../domain/base/DomainWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UnitWhereUniqueInput } from "../../unit/base/UnitWhereUniqueInput";

@InputType()
class DomainUnitUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DomainWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DomainWhereUniqueInput)
  @IsOptional()
  @Field(() => DomainWhereUniqueInput, {
    nullable: true,
  })
  domain?: DomainWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UnitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UnitWhereUniqueInput)
  @IsOptional()
  @Field(() => UnitWhereUniqueInput, {
    nullable: true,
  })
  unit?: UnitWhereUniqueInput;
}

export { DomainUnitUpdateInput as DomainUnitUpdateInput };
