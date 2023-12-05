import { IpedsRace as TIpedsRace } from "../api/ipedsRace/IpedsRace";

export const IPEDSRACE_TITLE_FIELD = "ipedsRace";

export const IpedsRaceTitle = (record: TIpedsRace): string => {
  return record.ipedsRace?.toString() || String(record.id);
};
