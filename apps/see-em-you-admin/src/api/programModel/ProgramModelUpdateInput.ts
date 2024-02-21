import { Decimal } from "decimal.js";
import { DegreeWhereUniqueInput } from "../degree/DegreeWhereUniqueInput";
import { FieldsofstudyWhereUniqueInput } from "../fieldsofstudy/FieldsofstudyWhereUniqueInput";
import { LuApplicationProgramUpdateManyWithoutProgramModelsInput } from "./LuApplicationProgramUpdateManyWithoutProgramModelsInput";
import { MlAreaUpdateManyWithoutProgramModelsInput } from "./MlAreaUpdateManyWithoutProgramModelsInput";
import { PaymentItemUpdateManyWithoutProgramModelsInput } from "./PaymentItemUpdateManyWithoutProgramModelsInput";
import { ProgramsApplicationreqUpdateManyWithoutProgramModelsInput } from "./ProgramsApplicationreqUpdateManyWithoutProgramModelsInput";

export type ProgramModelUpdateInput = {
  linkword?: string;
  programprice?: Decimal;
  programpriceLate?: Decimal | null;
  description?: string | null;
  url?: string | null;
  oraclestring?: string | null;
  registrationoraclestring?: string | null;
  baseprice?: Decimal;
  basepriceLate?: Decimal | null;
  prank?: number;
  enabled?: string | null;
  degree?: DegreeWhereUniqueInput;
  fieldsofstudy?: FieldsofstudyWhereUniqueInput;
  luApplicationPrograms?: LuApplicationProgramUpdateManyWithoutProgramModelsInput;
  mlArea?: MlAreaUpdateManyWithoutProgramModelsInput;
  paymentItem?: PaymentItemUpdateManyWithoutProgramModelsInput;
  programsApplicationreqs?: ProgramsApplicationreqUpdateManyWithoutProgramModelsInput;
};
