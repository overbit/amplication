import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UsHsStatusList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UsHsStatuses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Any Us Hs" source="anyUsHs" />
        <TextField label="App Id" source="appId" />
        <TextField label="First Gen" source="firstGen" />
        <TextField label="First Gen Grad" source="firstGenGrad" />
        <TextField label="Id" source="id" />
        <TextField label="Pell" source="pell" />
        <TextField label="Perm Zip Grad" source="permZipGrad" />
        <TextField label="Ug Fed Work Study" source="ugFedWorkStudy" />
        <TextField label="Us Hs Grad" source="usHSGrad" />
      </Datagrid>
    </List>
  );
};
