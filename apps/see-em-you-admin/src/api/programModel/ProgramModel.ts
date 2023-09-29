import { Decimal } from "decimal.js";
import { Degree } from "../degree/Degree";
import { Fieldsofstudy } from "../fieldsofstudy/Fieldsofstudy";
import { LuApplicationProgram } from "../luApplicationProgram/LuApplicationProgram";
import { MlArea } from "../mlArea/MlArea";
import { PaymentItem } from "../paymentItem/PaymentItem";
import { ProgramsApplicationreq } from "../programsApplicationreq/ProgramsApplicationreq";

export type ProgramModel = {
  baseprice: Decimal;
  basepriceLate: Decimal | null;
  degree?: Degree;
  description: string | null;
  enabled: string | null;
  fieldsofstudy?: Fieldsofstudy;
  id: number;
  linkword: string;
  luApplicationPrograms?: Array<LuApplicationProgram>;
  mlArea?: Array<MlArea>;
  oraclestring: string | null;
  paymentItem?: Array<PaymentItem>;
  prank: number;
  programprice: Decimal;
  programpriceLate: Decimal | null;
  programsApplicationreqs?: Array<ProgramsApplicationreq>;
  registrationoraclestring: string | null;
  url: string | null;
};
