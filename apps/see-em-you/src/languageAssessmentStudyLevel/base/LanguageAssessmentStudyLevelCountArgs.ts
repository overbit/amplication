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
import { LanguageAssessmentStudyLevelWhereInput } from "./LanguageAssessmentStudyLevelWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class LanguageAssessmentStudyLevelCountArgs {
  @ApiProperty({
    required: false,
    type: () => LanguageAssessmentStudyLevelWhereInput,
  })
  @Field(() => LanguageAssessmentStudyLevelWhereInput, { nullable: true })
  @Type(() => LanguageAssessmentStudyLevelWhereInput)
  where?: LanguageAssessmentStudyLevelWhereInput;
}

export { LanguageAssessmentStudyLevelCountArgs as LanguageAssessmentStudyLevelCountArgs };
