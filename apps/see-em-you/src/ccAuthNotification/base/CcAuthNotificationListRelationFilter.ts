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
import { CcAuthNotificationWhereInput } from "./CcAuthNotificationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CcAuthNotificationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CcAuthNotificationWhereInput,
  })
  @ValidateNested()
  @Type(() => CcAuthNotificationWhereInput)
  @IsOptional()
  @Field(() => CcAuthNotificationWhereInput, {
    nullable: true,
  })
  every?: CcAuthNotificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => CcAuthNotificationWhereInput,
  })
  @ValidateNested()
  @Type(() => CcAuthNotificationWhereInput)
  @IsOptional()
  @Field(() => CcAuthNotificationWhereInput, {
    nullable: true,
  })
  some?: CcAuthNotificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => CcAuthNotificationWhereInput,
  })
  @ValidateNested()
  @Type(() => CcAuthNotificationWhereInput)
  @IsOptional()
  @Field(() => CcAuthNotificationWhereInput, {
    nullable: true,
  })
  none?: CcAuthNotificationWhereInput;
}
export { CcAuthNotificationListRelationFilter as CcAuthNotificationListRelationFilter };
