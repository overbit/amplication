import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CcTransactionReportList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CcTransactionReports"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Size" source="size" />
        <TextField label="Last Mod Date" source="lastModDate" />
        <DateField source="statusTime" label="Status Time" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
