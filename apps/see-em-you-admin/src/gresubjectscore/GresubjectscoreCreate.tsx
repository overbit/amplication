import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const GresubjectscoreCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <TextInput label="Gre Sub Email" source="greSubEmail" />
        <TextInput label="Name" source="name" />
        <TextInput label="Percentile" source="percentile" />
        <TextInput label="Score" source="score" />
        <BooleanInput label="Scorereceived" source="scorereceived" />
        <DateTimeInput label="Testdate" source="testdate" />
      </SimpleForm>
    </Create>
  );
};
