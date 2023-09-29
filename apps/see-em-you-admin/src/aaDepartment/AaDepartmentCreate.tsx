import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DepartmentTitle } from "../department/DepartmentTitle";
import { PeriodTitle } from "../period/PeriodTitle";

export const AaDepartmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="department.id"
          reference="Department"
          label="Department"
        >
          <SelectInput optionText={DepartmentTitle} />
        </ReferenceInput>
        <ReferenceInput source="period.id" reference="Period" label="Period">
          <SelectInput optionText={PeriodTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
