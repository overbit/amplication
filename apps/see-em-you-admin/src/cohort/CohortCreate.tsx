import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PeriodTitle } from "../period/PeriodTitle";

export const CohortCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Cohort Id" source="cohortId" />
        <DateTimeInput label="Start Date" source="startDate" />
        <NumberInput step={1} label="Closed" source="closed" />
        <ReferenceInput source="period.id" reference="Period" label="Period">
          <SelectInput optionText={PeriodTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
