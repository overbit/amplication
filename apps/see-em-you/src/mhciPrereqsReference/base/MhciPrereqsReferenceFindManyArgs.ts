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
import { MhciPrereqsReferenceWhereInput } from "./MhciPrereqsReferenceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MhciPrereqsReferenceOrderByInput } from "./MhciPrereqsReferenceOrderByInput";

@ArgsType()
class MhciPrereqsReferenceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MhciPrereqsReferenceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MhciPrereqsReferenceWhereInput, { nullable: true })
  @Type(() => MhciPrereqsReferenceWhereInput)
  where?: MhciPrereqsReferenceWhereInput;

  @ApiProperty({
    required: false,
    type: [MhciPrereqsReferenceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MhciPrereqsReferenceOrderByInput], { nullable: true })
  @Type(() => MhciPrereqsReferenceOrderByInput)
  orderBy?: Array<MhciPrereqsReferenceOrderByInput>;

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

export { MhciPrereqsReferenceFindManyArgs as MhciPrereqsReferenceFindManyArgs };
