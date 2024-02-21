import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const FellowshipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Amount" source="amount" />
        <TextInput label="Status" source="status" />
        <DateTimeInput label="Applied Date" source="appliedDate" />
        <DateTimeInput label="Award Date" source="awardDate" />
        <NumberInput step={1} label="Duration" source="duration" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <NumberInput step={1} label="Short" source="short" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
