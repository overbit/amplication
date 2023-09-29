import { SlateProgram as TSlateProgram } from "../api/slateProgram/SlateProgram";

export const SLATEPROGRAM_TITLE_FIELD = "first";

export const SlateProgramTitle = (record: TSlateProgram): string => {
  return record.first?.toString() || String(record.id);
};
