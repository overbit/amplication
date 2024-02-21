import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const VoucherApplicationErrorShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="App Id" source="appId" />
        <TextField label="Code" source="code" />
        <TextField label="Va Id" source="vaId" />
        <TextField label="Err Msg" source="errMsg" />
        <TextField label="Allow Multiple" source="allowMultiple" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
