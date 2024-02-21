import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SystemenvList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Systemenvs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Domain Id" source="domainId" />
        <TextField label="Coorduser Id" source="coorduserId" />
        <TextField label="Expdate" source="expdate" />
        <TextField label="Expdate2" source="expdate2" />
        <TextField label="Appbaseprice" source="appbaseprice" />
        <TextField label="Sysemail" source="sysemail" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
