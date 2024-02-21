import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SystemenvShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Domain Id" source="domainId" />
        <TextField label="Coorduser Id" source="coorduserId" />
        <TextField label="Expdate" source="expdate" />
        <TextField label="Expdate2" source="expdate2" />
        <TextField label="Appbaseprice" source="appbaseprice" />
        <TextField label="Sysemail" source="sysemail" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
