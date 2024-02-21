import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LanguageAssessmentList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LanguageAssessments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Language" source="language" />
        <TextField label="Listening" source="listening" />
        <TextField label="Speaking" source="speaking" />
        <TextField label="Reading" source="reading" />
        <TextField label="Writing" source="writing" />
        <TextField label="Native Speaker" source="nativeSpeaker" />
        <TextField label="Years Study" source="yearsStudy" />
        <TextField label="Study Level" source="studyLevel" />
        <TextField label="Competency Evidence" source="competencyEvidence" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
