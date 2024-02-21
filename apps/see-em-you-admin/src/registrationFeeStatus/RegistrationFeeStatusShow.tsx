import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const RegistrationFeeStatusShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Amount" source="amount" />
        <BooleanField label="Paid" source="paid" />
        <BooleanField label="Waived" source="waived" />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
