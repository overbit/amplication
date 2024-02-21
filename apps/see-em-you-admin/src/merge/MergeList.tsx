import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const MergeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Merges"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="mergeDate" label="Merge Date" />
        <TextField label="Application Id" source="applicationId" />
        <BooleanField label="Merged" source="merged" />
        <TextField label="Error Field" source="errorField" />
        <TextField label="Message" source="message" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
