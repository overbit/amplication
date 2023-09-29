import { State as TState } from "../api/state/State";

export const STATE_TITLE_FIELD = "name";

export const StateTitle = (record: TState): string => {
  return record.name?.toString() || String(record.id);
};
