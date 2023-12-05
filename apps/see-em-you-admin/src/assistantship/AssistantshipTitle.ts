import { Assistantship as TAssistantship } from "../api/assistantship/Assistantship";

export const ASSISTANTSHIP_TITLE_FIELD = "id";

export const AssistantshipTitle = (record: TAssistantship): string => {
  return record.id?.toString() || String(record.id);
};
