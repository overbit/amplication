import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const LanguageAssessmentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Competency Evidence" source="competencyEvidence" />
        <TextField label="Id" source="id" />
        <TextField label="Language" source="language" />
        <TextField label="Listening" source="listening" />
        <TextField label="Native Speaker" source="nativeSpeaker" />
        <TextField label="Reading" source="reading" />
        <TextField label="Speaking" source="speaking" />
        <TextField label="Study Level" source="studyLevel" />
        <TextField label="Writing" source="writing" />
        <TextField label="Years Study" source="yearsStudy" />
      </SimpleShowLayout>
    </Show>
  );
};
