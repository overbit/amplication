import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const FellowshipEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Amount" source="amount" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <DateTimeInput label="Applied Date" source="appliedDate" />
        <DateTimeInput label="Award Date" source="awardDate" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <NumberInput step={1} label="Duration" source="duration" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Short" source="short" />
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
