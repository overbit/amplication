import { Publication as TPublication } from "../api/publication/Publication";

export const PUBLICATION_TITLE_FIELD = "title";

export const PublicationTitle = (record: TPublication): string => {
  return record.title?.toString() || String(record.id);
};
