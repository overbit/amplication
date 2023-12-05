import { Visatype as TVisatype } from "../api/visatype/Visatype";

export const VISATYPE_TITLE_FIELD = "name";

export const VisatypeTitle = (record: TVisatype): string => {
  return record.name?.toString() || String(record.id);
};
