import { SortOrder } from "../../util/SortOrder";

export type ParentInfoOrderByInput = {
  appId?: SortOrder;
  p1Profession?: SortOrder;
  p1EdLevel?: SortOrder;
  p2Profession?: SortOrder;
  p2EdLevel?: SortOrder;
  created?: SortOrder;
  modified?: SortOrder;
  id?: SortOrder;
};
