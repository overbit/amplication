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
import { AttendanceStatusWhereInput } from "./AttendanceStatusWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AttendanceStatusCountArgs {
  @ApiProperty({
    required: false,
    type: () => AttendanceStatusWhereInput,
  })
  @Field(() => AttendanceStatusWhereInput, { nullable: true })
  @Type(() => AttendanceStatusWhereInput)
  where?: AttendanceStatusWhereInput;
}

export { AttendanceStatusCountArgs as AttendanceStatusCountArgs };
