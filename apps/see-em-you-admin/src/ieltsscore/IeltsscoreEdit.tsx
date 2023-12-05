import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const IeltsscoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <NumberInput label="Listeningscore" source="listeningscore" />
        <NumberInput label="Overallscore" source="overallscore" />
        <NumberInput label="Readingscore" source="readingscore" />
        <NumberInput step={1} label="Scorereceived" source="scorereceived" />
        <NumberInput label="Speakingscore" source="speakingscore" />
        <DateTimeInput label="Testdate" source="testdate" />
        <TextInput label="Test Email" source="testEmail" />
        <NumberInput label="Writingscore" source="writingscore" />
      </SimpleForm>
    </Edit>
  );
};
