import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SlateMaterialList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SlateMaterials"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField
          label="Application Slate Guid"
          source="applicationSlateGuid"
        />
        <TextField label="Material Export1" source="materialExport1" />
        <TextField label="File Name" source="fileName" />
        <TextField label="Material Name" source="materialName" />
        <TextField label="Name" source="name" />
        <TextField label="Email" source="email" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
