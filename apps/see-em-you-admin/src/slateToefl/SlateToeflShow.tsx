import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SlateToeflShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="First" source="first" />
        <TextField label="Id" source="id" />
        <TextField label="Last" source="last" />
        <TextField label="Middle" source="middle" />
        <TextField label="Prefix" source="prefix" />
        <TextField label="Toefl Listening" source="toeflListening" />
        <TextField label="Toefl Reading" source="toeflReading" />
        <TextField label="Toefl Speaking" source="toeflSpeaking" />
        <TextField
          label="Toefl Structure Written Expression"
          source="toeflStructureWrittenExpression"
        />
        <TextField label="Toefl Total" source="toeflTotal" />
      </SimpleShowLayout>
    </Show>
  );
};
