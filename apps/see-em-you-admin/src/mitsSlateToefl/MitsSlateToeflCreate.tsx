import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MitsSlateToeflCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First" source="first" />
        <TextInput label="Last" source="last" />
        <TextInput label="Middle" source="middle" />
        <TextInput label="Prefix" source="prefix" />
        <TextInput label="Toefl Listening" source="toeflListening" />
        <TextInput label="Toefl Reading" source="toeflReading" />
        <TextInput label="Toefl Speaking" source="toeflSpeaking" />
        <TextInput
          label="Toefl Structure Written Expression"
          source="toeflStructureWrittenExpression"
        />
        <TextInput label="Toefl Total" source="toeflTotal" />
      </SimpleForm>
    </Create>
  );
};
