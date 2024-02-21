import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SlateToeflCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Prefix" source="prefix" />
        <TextInput label="First" source="first" />
        <TextInput label="Middle" source="middle" />
        <TextInput label="Last" source="last" />
        <TextInput label="Toefl Total" source="toeflTotal" />
        <TextInput label="Toefl Listening" source="toeflListening" />
        <TextInput label="Toefl Reading" source="toeflReading" />
        <TextInput
          label="Toefl Structure Written Expression"
          source="toeflStructureWrittenExpression"
        />
        <TextInput label="Toefl Speaking" source="toeflSpeaking" />
      </SimpleForm>
    </Create>
  );
};
