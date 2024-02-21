import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const GresubjectscoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Testdate" source="testdate" />
        <TextInput label="Name" source="name" />
        <TextInput label="Score" source="score" />
        <TextInput label="Percentile" source="percentile" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <TextInput label="Gre Sub Email" source="greSubEmail" />
        <BooleanInput label="Scorereceived" source="scorereceived" />
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
