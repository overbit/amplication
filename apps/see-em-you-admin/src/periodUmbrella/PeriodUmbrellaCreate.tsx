import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const PeriodUmbrellaCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Admission Term" source="admissionTerm" />
        <NumberInput step={1} label="Admission Year" source="admissionYear" />
        <DateTimeInput label="Higher Fee Date" source="higherFeeDate" />
        <TextInput label="Umbrella Name" source="umbrellaName" />
        <DateTimeInput label="Last Payment Date" source="lastPaymentDate" />
      </SimpleForm>
    </Create>
  );
};
