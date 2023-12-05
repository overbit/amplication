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
import { LuApplicationAdvisorWhereUniqueInput } from "./LuApplicationAdvisorWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class LuApplicationAdvisorFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => LuApplicationAdvisorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LuApplicationAdvisorWhereUniqueInput)
  @Field(() => LuApplicationAdvisorWhereUniqueInput, { nullable: false })
  where!: LuApplicationAdvisorWhereUniqueInput;
}

export { LuApplicationAdvisorFindUniqueArgs as LuApplicationAdvisorFindUniqueArgs };
