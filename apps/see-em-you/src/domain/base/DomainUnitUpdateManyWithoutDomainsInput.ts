/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DomainUnitWhereUniqueInput } from "../../domainUnit/base/DomainUnitWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DomainUnitUpdateManyWithoutDomainsInput {
  @Field(() => [DomainUnitWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DomainUnitWhereUniqueInput],
  })
  connect?: Array<DomainUnitWhereUniqueInput>;

  @Field(() => [DomainUnitWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DomainUnitWhereUniqueInput],
  })
  disconnect?: Array<DomainUnitWhereUniqueInput>;

  @Field(() => [DomainUnitWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DomainUnitWhereUniqueInput],
  })
  set?: Array<DomainUnitWhereUniqueInput>;
}

export { DomainUnitUpdateManyWithoutDomainsInput as DomainUnitUpdateManyWithoutDomainsInput };
