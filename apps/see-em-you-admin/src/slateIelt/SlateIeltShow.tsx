import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SlateIeltShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Prefix" source="prefix" />
        <TextField label="First" source="first" />
        <TextField label="Middle" source="middle" />
        <TextField label="Last" source="last" />
        <TextField
          label="Ielts Overall Band Score"
          source="ieltsOverallBandScore"
        />
        <TextField label="Ielts Listening" source="ieltsListening" />
        <TextField label="Ielts Reading" source="ieltsReading" />
        <TextField label="Ielts Writing" source="ieltsWriting" />
        <TextField label="Ielts Speaking" source="ieltsSpeaking" />
      </SimpleShowLayout>
    </Show>
  );
};
