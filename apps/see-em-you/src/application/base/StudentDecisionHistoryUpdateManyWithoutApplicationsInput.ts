/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { StudentDecisionHistoryWhereUniqueInput } from "../../studentDecisionHistory/base/StudentDecisionHistoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class StudentDecisionHistoryUpdateManyWithoutApplicationsInput {
  @Field(() => [StudentDecisionHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StudentDecisionHistoryWhereUniqueInput],
  })
  connect?: Array<StudentDecisionHistoryWhereUniqueInput>;

  @Field(() => [StudentDecisionHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StudentDecisionHistoryWhereUniqueInput],
  })
  disconnect?: Array<StudentDecisionHistoryWhereUniqueInput>;

  @Field(() => [StudentDecisionHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StudentDecisionHistoryWhereUniqueInput],
  })
  set?: Array<StudentDecisionHistoryWhereUniqueInput>;
}

export { StudentDecisionHistoryUpdateManyWithoutApplicationsInput as StudentDecisionHistoryUpdateManyWithoutApplicationsInput };
