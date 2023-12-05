/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AssistantshipWhereInput } from "./AssistantshipWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AssistantshipListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AssistantshipWhereInput,
  })
  @ValidateNested()
  @Type(() => AssistantshipWhereInput)
  @IsOptional()
  @Field(() => AssistantshipWhereInput, {
    nullable: true,
  })
  every?: AssistantshipWhereInput;

  @ApiProperty({
    required: false,
    type: () => AssistantshipWhereInput,
  })
  @ValidateNested()
  @Type(() => AssistantshipWhereInput)
  @IsOptional()
  @Field(() => AssistantshipWhereInput, {
    nullable: true,
  })
  some?: AssistantshipWhereInput;

  @ApiProperty({
    required: false,
    type: () => AssistantshipWhereInput,
  })
  @ValidateNested()
  @Type(() => AssistantshipWhereInput)
  @IsOptional()
  @Field(() => AssistantshipWhereInput, {
    nullable: true,
  })
  none?: AssistantshipWhereInput;
}
export { AssistantshipListRelationFilter as AssistantshipListRelationFilter };
