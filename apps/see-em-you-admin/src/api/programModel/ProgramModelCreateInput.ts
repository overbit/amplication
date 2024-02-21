import { Decimal } from "decimal.js";
import { DegreeWhereUniqueInput } from "../degree/DegreeWhereUniqueInput";
import { FieldsofstudyWhereUniqueInput } from "../fieldsofstudy/FieldsofstudyWhereUniqueInput";
import { LuApplicationProgramCreateNestedManyWithoutProgramModelsInput } from "./LuApplicationProgramCreateNestedManyWithoutProgramModelsInput";
import { MlAreaCreateNestedManyWithoutProgramModelsInput } from "./MlAreaCreateNestedManyWithoutProgramModelsInput";
import { PaymentItemCreateNestedManyWithoutProgramModelsInput } from "./PaymentItemCreateNestedManyWithoutProgramModelsInput";
import { ProgramsApplicationreqCreateNestedManyWithoutProgramModelsInput } from "./ProgramsApplicationreqCreateNestedManyWithoutProgramModelsInput";

export type ProgramModelCreateInput = {
  linkword: string;
  programprice: Decimal;
  programpriceLate?: Decimal | null;
  description?: string | null;
  url?: string | null;
  oraclestring?: string | null;
  registrationoraclestring?: string | null;
  baseprice: Decimal;
  basepriceLate?: Decimal | null;
  prank: number;
  enabled?: string | null;
  degree: DegreeWhereUniqueInput;
  fieldsofstudy: FieldsofstudyWhereUniqueInput;
  luApplicationPrograms?: LuApplicationProgramCreateNestedManyWithoutProgramModelsInput;
  mlArea?: MlAreaCreateNestedManyWithoutProgramModelsInput;
  paymentItem?: PaymentItemCreateNestedManyWithoutProgramModelsInput;
  programsApplicationreqs?: ProgramsApplicationreqCreateNestedManyWithoutProgramModelsInput;
};
