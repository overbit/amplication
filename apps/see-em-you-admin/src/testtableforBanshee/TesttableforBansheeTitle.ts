import { TesttableforBanshee as TTesttableforBanshee } from "../api/testtableforBanshee/TesttableforBanshee";

export const TESTTABLEFORBANSHEE_TITLE_FIELD = "id";

export const TesttableforBansheeTitle = (
  record: TTesttableforBanshee
): string => {
  return record.id?.toString() || String(record.id);
};
