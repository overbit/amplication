import { DietrichRecognition as TDietrichRecognition } from "../api/dietrichRecognition/DietrichRecognition";

export const DIETRICHRECOGNITION_TITLE_FIELD = "description";

export const DietrichRecognitionTitle = (
  record: TDietrichRecognition
): string => {
  return record.description?.toString() || String(record.id);
};
