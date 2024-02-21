import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const ExperienceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <NumberInput step={1} label="Experiencetype" source="experiencetype" />
        <NumberInput step={1} label="Order Entered" source="orderEntered" />
        <TextInput label="Company" source="company" />
        <DateTimeInput label="Start Date" source="startDate" />
        <TextInput label="End Date" source="endDate" />
        <TextInput label="Years Exp" source="yearsExp" />
        <TextInput label="Address" source="address" />
        <TextInput label="Job Title" source="jobTitle" />
        <TextInput label="Job Description" source="jobDescription" />
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
