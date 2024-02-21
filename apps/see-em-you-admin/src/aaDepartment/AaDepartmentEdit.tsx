import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PeriodTitle } from "../period/PeriodTitle";
import { DepartmentTitle } from "../department/DepartmentTitle";

export const AaDepartmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
