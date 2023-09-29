/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MseAqaWhereUniqueInput } from "../../mseAqa/base/MseAqaWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MseAqaUpdateManyWithoutApplicationsInput {
  @Field(() => [MseAqaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MseAqaWhereUniqueInput],
  })
  connect?: Array<MseAqaWhereUniqueInput>;

  @Field(() => [MseAqaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MseAqaWhereUniqueInput],
  })
  disconnect?: Array<MseAqaWhereUniqueInput>;

  @Field(() => [MseAqaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MseAqaWhereUniqueInput],
  })
  set?: Array<MseAqaWhereUniqueInput>;
}

export { MseAqaUpdateManyWithoutApplicationsInput as MseAqaUpdateManyWithoutApplicationsInput };
