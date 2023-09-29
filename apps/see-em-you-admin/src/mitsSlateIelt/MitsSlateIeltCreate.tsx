import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MitsSlateIeltCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First" source="first" />
        <TextInput label="Ielts Listening" source="ieltsListening" />
        <TextInput
          label="Ielts Overall Band Score"
          source="ieltsOverallBandScore"
        />
        <TextInput label="Ielts Reading" source="ieltsReading" />
        <TextInput label="Ielts Speaking" source="ieltsSpeaking" />
        <TextInput label="Ielts Writing" source="ieltsWriting" />
        <TextInput label="Last" source="last" />
        <TextInput label="Middle" source="middle" />
        <TextInput label="Prefix" source="prefix" />
      </SimpleForm>
    </Create>
  );
};
