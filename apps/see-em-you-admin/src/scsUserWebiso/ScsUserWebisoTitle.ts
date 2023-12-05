import { ScsUserWebiso as TScsUserWebiso } from "../api/scsUserWebiso/ScsUserWebiso";

export const SCSUSERWEBISO_TITLE_FIELD = "webiso";

export const ScsUserWebisoTitle = (record: TScsUserWebiso): string => {
  return record.webiso?.toString() || String(record.id);
};
