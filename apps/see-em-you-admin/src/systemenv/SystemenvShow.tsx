import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SystemenvShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Appbaseprice" source="appbaseprice" />
        <TextField label="Coorduser Id" source="coorduserId" />
        <TextField label="Domain Id" source="domainId" />
        <TextField label="Expdate" source="expdate" />
        <TextField label="Expdate2" source="expdate2" />
        <TextField label="Id" source="id" />
        <TextField label="Sysemail" source="sysemail" />
      </SimpleShowLayout>
    </Show>
  );
};
