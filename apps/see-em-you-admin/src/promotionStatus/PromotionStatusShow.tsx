import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PromotionStatusShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Round" source="round" />
        <DateField source="statusTime" label="Status Time" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
