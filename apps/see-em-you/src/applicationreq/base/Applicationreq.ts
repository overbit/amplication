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
import { IsInt, IsString, ValidateNested, IsOptional } from "class-validator";
import { ProgramsApplicationreq } from "../../programsApplicationreq/base/ProgramsApplicationreq";
import { Type } from "class-transformer";

@ObjectType()
class Applicationreq {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  linkname!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => [ProgramsApplicationreq],
  })
  @ValidateNested()
  @Type(() => ProgramsApplicationreq)
  @IsOptional()
  programsApplicationreqs?: Array<ProgramsApplicationreq>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  short!: string | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  sortorder!: number;
}

export { Applicationreq as Applicationreq };
