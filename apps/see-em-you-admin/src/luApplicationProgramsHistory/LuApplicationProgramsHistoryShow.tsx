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
        <TextField label="Lap Id" source="lapId" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Choice" source="choice" />
        <TextField label="Deleted By" source="deletedBy" />
        <DateField source="createdDate" label="Created Date" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
