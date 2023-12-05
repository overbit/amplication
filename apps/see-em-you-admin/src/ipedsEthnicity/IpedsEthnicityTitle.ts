import { IpedsEthnicity as TIpedsEthnicity } from "../api/ipedsEthnicity/IpedsEthnicity";

export const IPEDSETHNICITY_TITLE_FIELD = "ipedsEthnicity";

export const IpedsEthnicityTitle = (record: TIpedsEthnicity): string => {
  return record.ipedsEthnicity?.toString() || String(record.id);
};
