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
import { TeachingExperienceWhereUniqueInput } from "./TeachingExperienceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TeachingExperienceUpdateInput } from "./TeachingExperienceUpdateInput";

@ArgsType()
class UpdateTeachingExperienceArgs {
  @ApiProperty({
    required: true,
    type: () => TeachingExperienceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TeachingExperienceWhereUniqueInput)
  @Field(() => TeachingExperienceWhereUniqueInput, { nullable: false })
  where!: TeachingExperienceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TeachingExperienceUpdateInput,
  })
  @ValidateNested()
  @Type(() => TeachingExperienceUpdateInput)
  @Field(() => TeachingExperienceUpdateInput, { nullable: false })
  data!: TeachingExperienceUpdateInput;
}

export { UpdateTeachingExperienceArgs as UpdateTeachingExperienceArgs };
