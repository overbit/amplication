import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { PeriodTitle } from "../period/PeriodTitle";

export const CohortCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Closed" source="closed" />
        <NumberInput step={1} label="Cohort Id" source="cohortId" />
        <ReferenceInput source="period.id" reference="Period" label="Period">
          <SelectInput optionText={PeriodTitle} />
        </ReferenceInput>
        <DateTimeInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
