import { FolderLabelInfo as TFolderLabelInfo } from "../api/folderLabelInfo/FolderLabelInfo";

export const FOLDERLABELINFO_TITLE_FIELD = "id";

export const FolderLabelInfoTitle = (record: TFolderLabelInfo): string => {
  return record.id?.toString() || String(record.id);
};
