import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PeriodList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Periods"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Description" source="description" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Id" source="id" />
        <TextField label="Parent Period Id" source="parentPeriodId" />
        <TextField label="Period Type Id" source="periodTypeId" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="Unit Id" source="unitId" />
      </Datagrid>
    </List>
  );
};
