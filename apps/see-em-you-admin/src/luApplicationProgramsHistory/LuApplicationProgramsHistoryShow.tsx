import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const LuApplicationProgramsHistoryShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Choice" source="choice" />
        <DateField source="createdDate" label="Created Date" />
        <TextField label="Deleted By" source="deletedBy" />
        <TextField label="Id" source="id" />
        <TextField label="Lap Id" source="lapId" />
        <TextField label="Program Id" source="programId" />
      </SimpleShowLayout>
    </Show>
  );
};
