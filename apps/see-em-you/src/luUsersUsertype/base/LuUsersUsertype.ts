/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, ValidateNested } from "class-validator";
import { User } from "../../user/base/User";
import { Type } from "class-transformer";
import { MhciPrereqsConversationComment } from "../../mhciPrereqsConversationComment/base/MhciPrereqsConversationComment";
import { MhciPrereqsCourse } from "../../mhciPrereqsCourse/base/MhciPrereqsCourse";
import { MhciPrereqsDesignPortfolio } from "../../mhciPrereqsDesignPortfolio/base/MhciPrereqsDesignPortfolio";
import { MhciPrereqsProgrammingSample } from "../../mhciPrereqsProgrammingSample/base/MhciPrereqsProgrammingSample";
import { MhciPrereqsProgrammingTest } from "../../mhciPrereqsProgrammingTest/base/MhciPrereqsProgrammingTest";

@ObjectType()
class LuUsersUsertype {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  usertypeId!: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  domain!: number | null;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  users?: User;

  @ApiProperty({
    required: false,
    type: () => [MhciPrereqsConversationComment],
  })
  @ValidateNested()
  @Type(() => MhciPrereqsConversationComment)
  @IsOptional()
  mhciPrereqsConversationComments?: Array<MhciPrereqsConversationComment>;

  @ApiProperty({
    required: false,
    type: () => [MhciPrereqsCourse],
  })
  @ValidateNested()
  @Type(() => MhciPrereqsCourse)
  @IsOptional()
  mhciPrereqsCourses?: Array<MhciPrereqsCourse>;

  @ApiProperty({
    required: false,
    type: () => [MhciPrereqsDesignPortfolio],
  })
  @ValidateNested()
  @Type(() => MhciPrereqsDesignPortfolio)
  @IsOptional()
  mhciPrereqsDesignPortfolios?: Array<MhciPrereqsDesignPortfolio>;

  @ApiProperty({
    required: false,
    type: () => MhciPrereqsProgrammingSample,
  })
  @ValidateNested()
  @Type(() => MhciPrereqsProgrammingSample)
  @IsOptional()
  mhciPrereqsProgrammingSamples?: MhciPrereqsProgrammingSample | null;

  @ApiProperty({
    required: false,
    type: () => [MhciPrereqsProgrammingTest],
  })
  @ValidateNested()
  @Type(() => MhciPrereqsProgrammingTest)
  @IsOptional()
  mhciPrereqsProgrammingTests?: Array<MhciPrereqsProgrammingTest>;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;
}

export { LuUsersUsertype as LuUsersUsertype };
