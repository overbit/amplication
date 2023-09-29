import { Fieldsofstudy as TFieldsofstudy } from "../api/fieldsofstudy/Fieldsofstudy";

export const FIELDSOFSTUDY_TITLE_FIELD = "name";

export const FieldsofstudyTitle = (record: TFieldsofstudy): string => {
  return record.name?.toString() || String(record.id);
};
