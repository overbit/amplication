import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const LanguageAssessmentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
