import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const WaiverApplicationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Org Id" source="orgId" />
        <TextField label="Datafile Id" source="datafileId" />
        <DateField source="createDate" label="Create Date" />
        <DateField source="updateDate" label="Update Date" />
      </SimpleShowLayout>
    </Show>
  );
};
