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
import { MitsSlateReviewWhereUniqueInput } from "./MitsSlateReviewWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MitsSlateReviewUpdateInput } from "./MitsSlateReviewUpdateInput";

@ArgsType()
class UpdateMitsSlateReviewArgs {
  @ApiProperty({
    required: true,
    type: () => MitsSlateReviewWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MitsSlateReviewWhereUniqueInput)
  @Field(() => MitsSlateReviewWhereUniqueInput, { nullable: false })
  where!: MitsSlateReviewWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MitsSlateReviewUpdateInput,
  })
  @ValidateNested()
  @Type(() => MitsSlateReviewUpdateInput)
  @Field(() => MitsSlateReviewUpdateInput, { nullable: false })
  data!: MitsSlateReviewUpdateInput;
}

export { UpdateMitsSlateReviewArgs as UpdateMitsSlateReviewArgs };
