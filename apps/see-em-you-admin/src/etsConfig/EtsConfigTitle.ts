import { EtsConfig as TEtsConfig } from "../api/etsConfig/EtsConfig";

export const ETSCONFIG_TITLE_FIELD = "testName";

export const EtsConfigTitle = (record: TEtsConfig): string => {
  return record.testName?.toString() || String(record.id);
};
