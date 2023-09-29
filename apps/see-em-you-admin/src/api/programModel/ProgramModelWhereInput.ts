import { DegreeWhereUniqueInput } from "../degree/DegreeWhereUniqueInput";
import { FieldsofstudyWhereUniqueInput } from "../fieldsofstudy/FieldsofstudyWhereUniqueInput";
import { LuApplicationProgramListRelationFilter } from "../luApplicationProgram/LuApplicationProgramListRelationFilter";
import { MlAreaListRelationFilter } from "../mlArea/MlAreaListRelationFilter";
import { PaymentItemListRelationFilter } from "../paymentItem/PaymentItemListRelationFilter";
import { ProgramsApplicationreqListRelationFilter } from "../programsApplicationreq/ProgramsApplicationreqListRelationFilter";

export type ProgramModelWhereInput = {
  degree?: DegreeWhereUniqueInput;
  fieldsofstudy?: FieldsofstudyWhereUniqueInput;
  luApplicationPrograms?: LuApplicationProgramListRelationFilter;
  mlArea?: MlAreaListRelationFilter;
  paymentItem?: PaymentItemListRelationFilter;
  programsApplicationreqs?: ProgramsApplicationreqListRelationFilter;
};
