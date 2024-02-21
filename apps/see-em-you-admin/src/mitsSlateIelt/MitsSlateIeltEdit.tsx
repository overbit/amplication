import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MitsSlateIeltEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Prefix" source="prefix" />
        <TextInput label="First" source="first" />
        <TextInput label="Middle" source="middle" />
        <TextInput label="Last" source="last" />
        <TextInput
          label="Ielts Overall Band Score"
          source="ieltsOverallBandScore"
        />
        <TextInput label="Ielts Listening" source="ieltsListening" />
        <TextInput label="Ielts Reading" source="ieltsReading" />
        <TextInput label="Ielts Writing" source="ieltsWriting" />
        <TextInput label="Ielts Speaking" source="ieltsSpeaking" />
      </SimpleForm>
    </Edit>
  );
};
