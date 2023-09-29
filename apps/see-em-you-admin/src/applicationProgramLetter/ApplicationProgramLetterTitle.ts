import { ApplicationProgramLetter as TApplicationProgramLetter } from "../api/applicationProgramLetter/ApplicationProgramLetter";

export const APPLICATIONPROGRAMLETTER_TITLE_FIELD = "id";

export const ApplicationProgramLetterTitle = (
  record: TApplicationProgramLetter
): string => {
  return record.id?.toString() || String(record.id);
};
