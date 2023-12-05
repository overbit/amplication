import { Decimal } from "decimal.js";
import { DegreeWhereUniqueInput } from "../degree/DegreeWhereUniqueInput";
import { FieldsofstudyWhereUniqueInput } from "../fieldsofstudy/FieldsofstudyWhereUniqueInput";
import { LuApplicationProgramCreateNestedManyWithoutProgramModelsInput } from "./LuApplicationProgramCreateNestedManyWithoutProgramModelsInput";
import { MlAreaCreateNestedManyWithoutProgramModelsInput } from "./MlAreaCreateNestedManyWithoutProgramModelsInput";
import { PaymentItemCreateNestedManyWithoutProgramModelsInput } from "./PaymentItemCreateNestedManyWithoutProgramModelsInput";
import { ProgramsApplicationreqCreateNestedManyWithoutProgramModelsInput } from "./ProgramsApplicationreqCreateNestedManyWithoutProgramModelsInput";

export type ProgramModelCreateInput = {
  baseprice: Decimal;
  basepriceLate?: Decimal | null;
  degree: DegreeWhereUniqueInput;
  description?: string | null;
  enabled?: string | null;
  fieldsofstudy: FieldsofstudyWhereUniqueInput;
  linkword: string;
  luApplicationPrograms?: LuApplicationProgramCreateNestedManyWithoutProgramModelsInput;
  mlArea?: MlAreaCreateNestedManyWithoutProgramModelsInput;
  oraclestring?: string | null;
  paymentItem?: PaymentItemCreateNestedManyWithoutProgramModelsInput;
  prank: number;
  programprice: Decimal;
  programpriceLate?: Decimal | null;
  programsApplicationreqs?: ProgramsApplicationreqCreateNestedManyWithoutProgramModelsInput;
  registrationoraclestring?: string | null;
  url?: string | null;
};
