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
import { IsInt, IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { LuUsersUsertypeWhereUniqueInput } from "../../luUsersUsertype/base/LuUsersUsertypeWhereUniqueInput";

@InputType()
class MhciPrereqsProgrammingTestUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  applicationId?: number;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  downloadTimestamp?: Date | null;

  @ApiProperty({
    required: false,
    type: () => LuUsersUsertypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LuUsersUsertypeWhereUniqueInput)
  @IsOptional()
  @Field(() => LuUsersUsertypeWhereUniqueInput, {
    nullable: true,
  })
  luUsersUsertypes?: LuUsersUsertypeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  periodId?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  uploadDatafileinfoId?: number | null;
}

export { MhciPrereqsProgrammingTestUpdateInput as MhciPrereqsProgrammingTestUpdateInput };
