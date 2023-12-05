import { AdmissionLetterWhereInput } from "./AdmissionLetterWhereInput";
import { AdmissionLetterOrderByInput } from "./AdmissionLetterOrderByInput";

export type AdmissionLetterFindManyArgs = {
  where?: AdmissionLetterWhereInput;
  orderBy?: Array<AdmissionLetterOrderByInput>;
  skip?: number;
  take?: number;
};
