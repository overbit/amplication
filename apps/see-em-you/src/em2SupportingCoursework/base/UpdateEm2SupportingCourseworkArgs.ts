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
import { Em2SupportingCourseworkWhereUniqueInput } from "./Em2SupportingCourseworkWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Em2SupportingCourseworkUpdateInput } from "./Em2SupportingCourseworkUpdateInput";

@ArgsType()
class UpdateEm2SupportingCourseworkArgs {
  @ApiProperty({
    required: true,
    type: () => Em2SupportingCourseworkWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => Em2SupportingCourseworkWhereUniqueInput)
  @Field(() => Em2SupportingCourseworkWhereUniqueInput, { nullable: false })
  where!: Em2SupportingCourseworkWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => Em2SupportingCourseworkUpdateInput,
  })
  @ValidateNested()
  @Type(() => Em2SupportingCourseworkUpdateInput)
  @Field(() => Em2SupportingCourseworkUpdateInput, { nullable: false })
  data!: Em2SupportingCourseworkUpdateInput;
}

export { UpdateEm2SupportingCourseworkArgs as UpdateEm2SupportingCourseworkArgs };
