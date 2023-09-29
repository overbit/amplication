import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const CcAuthNotificationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField
          source="authNotificationTime"
          label="Auth Notification Time"
        />
        <TextField label="Id" source="id" />
        <TextField label="Payment Id" source="paymentId" />
      </SimpleShowLayout>
    </Show>
  );
};
