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
import { InstituteWhereUniqueInput } from "./InstituteWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { InstituteUpdateInput } from "./InstituteUpdateInput";

@ArgsType()
class UpdateInstituteArgs {
  @ApiProperty({
    required: true,
    type: () => InstituteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InstituteWhereUniqueInput)
  @Field(() => InstituteWhereUniqueInput, { nullable: false })
  where!: InstituteWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => InstituteUpdateInput,
  })
  @ValidateNested()
  @Type(() => InstituteUpdateInput)
  @Field(() => InstituteUpdateInput, { nullable: false })
  data!: InstituteUpdateInput;
}

export { UpdateInstituteArgs as UpdateInstituteArgs };
