/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RissMcnairWhereUniqueInput } from "../../rissMcnair/base/RissMcnairWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RissMcnairCreateNestedManyWithoutApplicationsInput {
  @Field(() => [RissMcnairWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RissMcnairWhereUniqueInput],
  })
  connect?: Array<RissMcnairWhereUniqueInput>;
}

export { RissMcnairCreateNestedManyWithoutApplicationsInput as RissMcnairCreateNestedManyWithoutApplicationsInput };
