import { FolderLabelInfoWhereInput } from "./FolderLabelInfoWhereInput";
import { FolderLabelInfoOrderByInput } from "./FolderLabelInfoOrderByInput";

export type FolderLabelInfoFindManyArgs = {
  where?: FolderLabelInfoWhereInput;
  orderBy?: Array<FolderLabelInfoOrderByInput>;
  skip?: number;
  take?: number;
};
