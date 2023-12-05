import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const ExperienceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <TextInput label="Company" source="company" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <TextInput label="End Date" source="endDate" />
        <NumberInput step={1} label="Experiencetype" source="experiencetype" />
        <TextInput label="Job Description" source="jobDescription" />
        <TextInput label="Job Title" source="jobTitle" />
        <NumberInput step={1} label="Order Entered" source="orderEntered" />
        <DateTimeInput label="Start Date" source="startDate" />
        <TextInput label="Years Exp" source="yearsExp" />
      </SimpleForm>
    </Create>
  );
};
