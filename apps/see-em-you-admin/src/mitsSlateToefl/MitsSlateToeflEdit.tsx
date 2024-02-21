import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MitsSlateToeflEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
