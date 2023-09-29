import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const IpedsEthnicityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"IpedsEthnicities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Ethnicity Id" source="ethnicityId" />
        <TextField label="Id" source="id" />
        <TextField label="Ipeds Ethnicity" source="ipedsEthnicity" />
        <TextField label="Sort Order" source="sortOrder" />
      </Datagrid>
    </List>
  );
};
