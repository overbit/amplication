import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const PeriodUmbrellaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Admission Term" source="admissionTerm" />
        <TextField label="Admission Year" source="admissionYear" />
        <TextField label="Higher Fee Date" source="higherFeeDate" />
        <TextField label="Id" source="id" />
        <TextField label="Last Payment Date" source="lastPaymentDate" />
        <TextField label="Umbrella Name" source="umbrellaName" />
      </SimpleShowLayout>
    </Show>
  );
};
