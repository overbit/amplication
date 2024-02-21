import { SlateProgram as TSlateProgram } from "../api/slateProgram/SlateProgram";

export const SLATEPROGRAM_TITLE_FIELD = "prefix";

export const SlateProgramTitle = (record: TSlateProgram): string => {
  return record.prefix?.toString() || String(record.id);
};
