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
import { StudentDecisionUniversityWhereUniqueInput } from "./StudentDecisionUniversityWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { StudentDecisionUniversityUpdateInput } from "./StudentDecisionUniversityUpdateInput";

@ArgsType()
class UpdateStudentDecisionUniversityArgs {
  @ApiProperty({
    required: true,
    type: () => StudentDecisionUniversityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StudentDecisionUniversityWhereUniqueInput)
  @Field(() => StudentDecisionUniversityWhereUniqueInput, { nullable: false })
  where!: StudentDecisionUniversityWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => StudentDecisionUniversityUpdateInput,
  })
  @ValidateNested()
  @Type(() => StudentDecisionUniversityUpdateInput)
  @Field(() => StudentDecisionUniversityUpdateInput, { nullable: false })
  data!: StudentDecisionUniversityUpdateInput;
}

export { UpdateStudentDecisionUniversityArgs as UpdateStudentDecisionUniversityArgs };
