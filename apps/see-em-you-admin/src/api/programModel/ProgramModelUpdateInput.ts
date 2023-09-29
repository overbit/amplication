import { Decimal } from "decimal.js";
import { DegreeWhereUniqueInput } from "../degree/DegreeWhereUniqueInput";
import { FieldsofstudyWhereUniqueInput } from "../fieldsofstudy/FieldsofstudyWhereUniqueInput";
import { LuApplicationProgramUpdateManyWithoutProgramModelsInput } from "./LuApplicationProgramUpdateManyWithoutProgramModelsInput";
import { MlAreaUpdateManyWithoutProgramModelsInput } from "./MlAreaUpdateManyWithoutProgramModelsInput";
import { PaymentItemUpdateManyWithoutProgramModelsInput } from "./PaymentItemUpdateManyWithoutProgramModelsInput";
import { ProgramsApplicationreqUpdateManyWithoutProgramModelsInput } from "./ProgramsApplicationreqUpdateManyWithoutProgramModelsInput";

export type ProgramModelUpdateInput = {
  baseprice?: Decimal;
  basepriceLate?: Decimal | null;
  degree?: DegreeWhereUniqueInput;
  description?: string | null;
  enabled?: string | null;
  fieldsofstudy?: FieldsofstudyWhereUniqueInput;
  linkword?: string;
  luApplicationPrograms?: LuApplicationProgramUpdateManyWithoutProgramModelsInput;
  mlArea?: MlAreaUpdateManyWithoutProgramModelsInput;
  oraclestring?: string | null;
  paymentItem?: PaymentItemUpdateManyWithoutProgramModelsInput;
  prank?: number;
  programprice?: Decimal;
  programpriceLate?: Decimal | null;
  programsApplicationreqs?: ProgramsApplicationreqUpdateManyWithoutProgramModelsInput;
  registrationoraclestring?: string | null;
  url?: string | null;
};
