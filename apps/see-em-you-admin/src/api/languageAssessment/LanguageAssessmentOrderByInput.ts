import { SortOrder } from "../../util/SortOrder";

export type LanguageAssessmentOrderByInput = {
  applicationId?: SortOrder;
  language?: SortOrder;
  listening?: SortOrder;
  speaking?: SortOrder;
  reading?: SortOrder;
  writing?: SortOrder;
  nativeSpeaker?: SortOrder;
  yearsStudy?: SortOrder;
  studyLevel?: SortOrder;
  competencyEvidence?: SortOrder;
  id?: SortOrder;
};
