import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GrescoreMscsWaiverList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"GrescoreMscsWaivers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Waiver Agree" source="waiverAgree" />
        <DateField source="waiverTime" label="Waiver Time" />
      </Datagrid>
    </List>
  );
};
