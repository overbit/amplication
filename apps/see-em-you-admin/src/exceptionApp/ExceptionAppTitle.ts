import { ExceptionApp as TExceptionApp } from "../api/exceptionApp/ExceptionApp";

export const EXCEPTIONAPP_TITLE_FIELD = "id";

export const ExceptionAppTitle = (record: TExceptionApp): string => {
  return record.id?.toString() || String(record.id);
};
