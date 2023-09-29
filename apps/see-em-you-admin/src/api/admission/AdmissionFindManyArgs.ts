import { AdmissionWhereInput } from "./AdmissionWhereInput";
import { AdmissionOrderByInput } from "./AdmissionOrderByInput";

export type AdmissionFindManyArgs = {
  where?: AdmissionWhereInput;
  orderBy?: Array<AdmissionOrderByInput>;
  skip?: number;
  take?: number;
};
