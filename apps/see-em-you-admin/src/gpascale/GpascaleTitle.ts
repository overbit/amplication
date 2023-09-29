import { Gpascale as TGpascale } from "../api/gpascale/Gpascale";

export const GPASCALE_TITLE_FIELD = "name";

export const GpascaleTitle = (record: TGpascale): string => {
  return record.name?.toString() || String(record.id);
};
