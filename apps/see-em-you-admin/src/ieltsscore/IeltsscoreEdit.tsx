import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const IeltsscoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Testdate" source="testdate" />
        <NumberInput label="Listeningscore" source="listeningscore" />
        <NumberInput label="Readingscore" source="readingscore" />
        <NumberInput label="Writingscore" source="writingscore" />
        <NumberInput label="Speakingscore" source="speakingscore" />
        <NumberInput label="Overallscore" source="overallscore" />
        <NumberInput step={1} label="Scorereceived" source="scorereceived" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <TextInput label="Test Email" source="testEmail" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
