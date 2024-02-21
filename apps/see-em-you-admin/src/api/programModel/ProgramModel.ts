import { Decimal } from "decimal.js";
import { Degree } from "../degree/Degree";
import { Fieldsofstudy } from "../fieldsofstudy/Fieldsofstudy";
import { LuApplicationProgram } from "../luApplicationProgram/LuApplicationProgram";
import { MlArea } from "../mlArea/MlArea";
import { PaymentItem } from "../paymentItem/PaymentItem";
import { ProgramsApplicationreq } from "../programsApplicationreq/ProgramsApplicationreq";

export type ProgramModel = {
  id: number;
  linkword: string;
  programprice: Decimal;
  programpriceLate: Decimal | null;
  description: string | null;
  url: string | null;
  oraclestring: string | null;
  registrationoraclestring: string | null;
  baseprice: Decimal;
  basepriceLate: Decimal | null;
  prank: number;
  enabled: string | null;
  degree?: Degree;
  fieldsofstudy?: Fieldsofstudy;
  luApplicationPrograms?: Array<LuApplicationProgram>;
  mlArea?: Array<MlArea>;
  paymentItem?: Array<PaymentItem>;
  programsApplicationreqs?: Array<ProgramsApplicationreq>;
};
