import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const RegistrationFeeStatusEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <BooleanInput label="Paid" source="paid" />
        <BooleanInput label="Waived" source="waived" />
      </SimpleForm>
    </Edit>
  );
};
