import { MlArea as TMlArea } from "../api/mlArea/MlArea";

export const MLAREA_TITLE_FIELD = "area";

export const MlAreaTitle = (record: TMlArea): string => {
  return record.area?.toString() || String(record.id);
};
