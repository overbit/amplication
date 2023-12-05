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
import { BfDepartmentWhereUniqueInput } from "./BfDepartmentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BfDepartmentUpdateInput } from "./BfDepartmentUpdateInput";

@ArgsType()
class UpdateBfDepartmentArgs {
  @ApiProperty({
    required: true,
    type: () => BfDepartmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BfDepartmentWhereUniqueInput)
  @Field(() => BfDepartmentWhereUniqueInput, { nullable: false })
  where!: BfDepartmentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BfDepartmentUpdateInput,
  })
  @ValidateNested()
  @Type(() => BfDepartmentUpdateInput)
  @Field(() => BfDepartmentUpdateInput, { nullable: false })
  data!: BfDepartmentUpdateInput;
}

export { UpdateBfDepartmentArgs as UpdateBfDepartmentArgs };
