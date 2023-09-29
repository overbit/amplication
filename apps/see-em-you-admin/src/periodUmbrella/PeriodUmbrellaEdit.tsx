import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const PeriodUmbrellaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Admission Term" source="admissionTerm" />
        <NumberInput step={1} label="Admission Year" source="admissionYear" />
        <DateTimeInput label="Higher Fee Date" source="higherFeeDate" />
        <DateTimeInput label="Last Payment Date" source="lastPaymentDate" />
        <TextInput label="Umbrella Name" source="umbrellaName" />
      </SimpleForm>
    </Edit>
  );
};
