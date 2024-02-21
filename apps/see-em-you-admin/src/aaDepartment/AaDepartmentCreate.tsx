import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PeriodTitle } from "../period/PeriodTitle";
import { DepartmentTitle } from "../department/DepartmentTitle";

export const AaDepartmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="period.id" reference="Period" label="Period">
          <SelectInput optionText={PeriodTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="department.id"
          reference="Department"
          label="Department"
        >
          <SelectInput optionText={DepartmentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
