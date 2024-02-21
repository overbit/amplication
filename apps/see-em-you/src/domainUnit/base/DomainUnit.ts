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
import { Domain } from "../../domain/base/Domain";
import { ValidateNested, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Unit } from "../../unit/base/Unit";

@ObjectType()
class DomainUnit {
  @ApiProperty({
    required: true,
    type: () => Domain,
  })
  @ValidateNested()
  @Type(() => Domain)
  domain?: Domain;

  @ApiProperty({
    required: true,
    type: () => Unit,
  })
  @ValidateNested()
  @Type(() => Unit)
  unit?: Unit;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;
}

export { DomainUnit as DomainUnit };
