import { MseAqa as TMseAqa } from "../api/mseAqa/MseAqa";

export const MSEAQA_TITLE_FIELD = "englishComments";

export const MseAqaTitle = (record: TMseAqa): string => {
  return record.englishComments?.toString() || String(record.id);
};
